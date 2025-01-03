
import NextAuth from 'next-auth'
import GitHub from 'next-auth/providers/github'
import Google from 'next-auth/providers/google'


export const {auth, handlers:{GET, POST}} = NextAuth({
    providers:[
        GitHub({
            clientId:process.env.GIT_CLIENT_ID,
            clientSecret:process.env.GIT_SECRET
        }),
        Google({
            clientId:process.env.GOOLGE_CLIENT_ID,
            clientSecret:process.env.GOOGLE_SECRET_KEY
        })
    ],
    secret:process.env.AUTH_SECRET
})