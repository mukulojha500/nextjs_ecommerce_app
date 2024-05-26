import connect from "@/helper/db";
import Product from "@/models/Product";
import { NextResponse } from "next/server";

//get product by categeory
export async function GET(request, {params}){
    const {name} = params;
    try{
        const products = await Product.find({categeory:name});
        return NextResponse.json(products,{
            status:201,
        })
    }catch(error){
        console.log(error);
        return NextResponse.json({
            message:"Error finding products!!!",
            success:false,
        },{
            status:500,
        })
    }
}