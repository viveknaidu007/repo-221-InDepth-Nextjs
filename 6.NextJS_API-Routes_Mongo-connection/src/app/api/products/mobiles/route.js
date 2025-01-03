import { DBconnection } from "@/app/utils/config/db";
import MobileModel from "@/app/utils/models/Mobile";
import { NextResponse } from "next/server";

const ConnectDB = async()=>{
        await DBconnection()
}

ConnectDB()

export async function GET(){
        const mobileData = await MobileModel.find({})
        return NextResponse.json({mobileData})
}

export async function POST(request){
    const {title, model, price} = await request.json()
    await MobileModel.create({
            title, model, price
    })

    return NextResponse.json({success: "Mobile added Successfully!"})
}


export async function PUT(request){
        
        const mobileId = await request.nextUrl.searchParams.get("id");
        const {newTitle:title, newModel: model, newPrice:price} = await request.json()
        await MobileModel.findByIdAndUpdate(mobileId, {title, model, price});
        return NextResponse.json({msg:"Mobile Product Updated"})
}

export async function DELETE(request){
        const mobileId = await request.nextUrl.searchParams.get("id");
        await MobileModel.findByIdAndDelete(mobileId)
        return NextResponse.json({msg:'Mobile product deleted successfully'})
    }
    

