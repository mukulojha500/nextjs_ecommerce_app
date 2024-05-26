import connect from "@/helper/db";
import Product from "@/models/Product";
import { NextResponse } from "next/server";

//update a product
export async function PUT(request, { params }) {
    const { productId } = params;
    const product = await Product.findById(productId);
    const { name, price, categeory, description, ratings, reviews, img } = await request.json();
    product.name = name;
    product.price = price;
    product.categeory = categeory;
    product.description = description;
    product.ratings = ratings;
    product.reviews = reviews;
    product.img = img;
    try {
        const updatedProduct = product.save();
        return NextResponse.json(updatedProduct, {
            status: 201,
        })
    } catch (error) {
        console.log(error);
        return NextResponse.json({
            message: "Product updating error!!!",
            success: false,
        }, {
            status: 500,
        })
    }

}

//delete a product
export async function DELETE(request, { params }) {
    const { productId } = params;
    try {
        await Product.findByIdAndDelete(productId);
        return NextResponse.json({
            message: "Product deleted successfully",
            success: true,
        }, {
            status: 201,
        })
    } catch (error) {
        console.log(error);
        return NextResponse.json({
            message: "Product deleting error!!!",
            success: false,
        }, {
            status: 500,
        })
    }
}