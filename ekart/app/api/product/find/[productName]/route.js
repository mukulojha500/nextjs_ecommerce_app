import connect from "@/helper/db";
import Product from "@/models/Product";
import { NextResponse } from "next/server";

//get product by name
export async function GET(request, {params}){
    const {productName} = params;
    try{
        const products = await Product.find({name:productName});
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