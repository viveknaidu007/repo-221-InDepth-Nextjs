
import NextAuth from 'next-auth'
import CredentialProvider from 'next-auth/providers/credentials'
import UserModel from './utils/models/User'
import DBconnection from './utils/config/db'
import bcrypt from 'bcryptjs';


export const {auth, signIn, signOut, handlers:{GET, POST}} = NextAuth({
    providers:[
        CredentialProvider({
            name:'credentials',

            async authorize(credentials){
               await DBconnection()
             
            const user = await UserModel.findOne({email:credentials?.email})
                if(!user){
                    return null
                }
            // const isValidPassword = bcrypt.compare(credentials?.password, user.password)

            // if(!isValidPassword){
            //     return null
            // } 

            if(credentials.password !== user.password){
                return null
            }
            
            return {name: user.username, email: user.email}

            }
        })
    ],
    secret: process.env.SECRET_KEY,
    pages:{
        signIn:"/login"
    }
})