import connect from "@/helper/db";
import Product from "@/models/Product";
import { NextResponse } from "next/server";

//get all products
export async function GET(request){
    await connect()
    try{
        const products = await Product.find();
        return NextResponse.json(products,{
            status:200,
        })
    }catch(error){
        console.log(error);
        return NextResponse.json({
            message:"Error getting products!!!",
            success:false,
        },{
            status:500,
        })
    }
}

//create a product
export async function POST(request){
    const {name, price, categeory, description, ratings, reviews, img} = await request.json();
    try{
        const product = new Product({
            name,
            price,
            categeory,
            description,
            ratings,
            reviews,
            img,
        })
        const createdProduct = await product.save();
        return NextResponse.json(createdProduct,{
            status:201,
        })
    }catch(error){
        console.log(error);
        return NextResponse.json({
            message:"Error creating Product!!!",
            success:false,
        },{
            status:501,
        })
    }
}