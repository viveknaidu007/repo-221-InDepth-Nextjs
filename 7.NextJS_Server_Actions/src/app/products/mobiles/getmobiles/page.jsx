import DBConnection from "@/app/lib/config/connection";
import MobileModel from "@/app/lib/models/Mobile";



export default async function MobileProducts(){
    await DBConnection();

    const allMobiles = await MobileModel.find({});

    return(
        <>
            {allMobiles.map((item)=>{
                return(
                    <div>
                        <div>Mobile Name: {item.title}</div>
                        <div>Model: {item.model}</div>
                        <div>Price: {item.price}</div>
                        <hr />
                    </div>
                )
            })}
        </>
    )
}
