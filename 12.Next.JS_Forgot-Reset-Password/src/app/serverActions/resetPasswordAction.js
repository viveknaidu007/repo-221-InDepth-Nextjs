"use server"


import { redirect } from "next/navigation"
import DBconnection from "../utils/config/db"
import UserModel from "../utils/models/User"


export async function resetPasswordAction(newPassword, token){
        console.log("newPassword", newPassword, token)

        await DBconnection()

        await UserModel.findOneAndUpdate({verifytoken:token}, {password: newPassword});
        redirect("/login")
}