import mongoose from "mongoose";


export async function DBconnection(){
    try {
    await mongoose.connect(process.env.MONGO_URI)
        console.log("DB connected")
    } catch (error) {
        console.log(error)
    }
}