import { DBconnection } from "@/app/utils/config/db";
import { NextResponse } from "next/server";


const ConnectDB = async()=>{
        await DBconnection()
}

ConnectDB()


export async function GET(){
    return NextResponse.json({student:"all student data"})
}
