
import mongoose from 'mongoose';



export const DBconnection = async()=>{
        try {
            await mongoose.connect(process.env.MONGO_URI)
            console.log("MongoDB Connection Succesfful")
        } catch (error) {
            console.log(error)
        }
}

