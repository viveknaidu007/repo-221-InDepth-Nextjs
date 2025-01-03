import { DBconnection } from "@/app/utils/config/db";
import { NextResponse } from "next/server";
import { writeFile } from 'fs/promises';
import path from 'path';
import MobileModel from "@/app/utils/models/Mobile";

export async function POST(request) {
    await DBconnection();

    const data = await request.formData();
    const image = data.get('image');
    const name = data.get('name');
    const price = data.get('price');

    const bufferData = await image.arrayBuffer();
    const buffer = Buffer.from(bufferData);
    const imagePath = path.join(process.cwd(), 'public', 'uploads', image.name);

    try {
        await writeFile(imagePath, buffer);
        const newMobile = new MobileModel({
            name: name,
            price: price,
            image: `/uploads/${image.name}`, 
        });
        await newMobile.save();
        return NextResponse.json({ response: "Successfully uploaded", success: true });
    } catch (error) {
        console.log(error);
        return NextResponse.json({ success: false });
    }
}

export async function GET() {
    await DBconnection();

    try {
        const mobiles = await MobileModel.find({});
        
        return NextResponse.json({ success: true, data: mobiles });
    } catch (error) {
        console.log(error);
        return NextResponse.json({ success: false, message: "Failed to fetch records" });
    }
}