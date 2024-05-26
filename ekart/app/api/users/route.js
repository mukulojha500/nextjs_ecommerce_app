
import User from "@/models/User";
import { NextResponse } from "next/server";

//create a user
export async function POST(request){

    const {name, email,phoneNumber,password,address,items} = await request.json();
    try{
        const user = new User({
            name,
            email,
            phoneNumber,
            password,
            address,
            items,
        })
        const createdUser = await user.save()
        console.log(createdUser);
        return NextResponse.json({
            message:"User created successfully!",
            success:true,
        },{
            status:201
        })
    }catch(error){
        console.log(error)
        return NextResponse.json({
            message:"Failed to create user!",
            success:false,
        },{
            status:404
        })
    }
}