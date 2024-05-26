import connect from "@/helper/db";
import User from "@/models/User";
import { NextResponse } from "next/server";

//get user
export async function GET(request, { params }) {
    const { userId } = params;
    try {
        const user = await User.findById(userId).select('-password');
        const response = NextResponse.json(user)
        return response;
    } catch (error) {
        console.log(error);
        return NextResponse.json({
            message: "User not found",
            success: false,
        }, {
            status: 500,
        })
    }
}

//update user
export async function PUT(request, { params }) {
    const { userId } = params;
    const { name, email, phoneNumber, password, address, items } = await request.json();
    const user = await User.findById(userId);
    user.name = name === null ? user.name : name;
    user.email = email === null ? user.email : email;
    user.phoneNumber = phoneNumber === null ? user.phoneNumber : phoneNumber;
    user.password = password === null ? user.password : password;
    user.address = address === null ? user.address : address;
    user.items = items === null ? user.items : items;
    try {
        const updatedUser = user.save()
        return NextResponse.json(updatedUser, {
            status: 201,
        });
    } catch (error) {
        console.log(error);
        return NextResponse.json({
            message: "Error updating user!!!",
            success: false,
        }, {
            status: 500,
        })
    }

}

//delete user
export async function DELETE(request, { params }) {
    const { user_id } = params;
    try {
        const deleteUser = await User.findByIdAndDelete(user_id);
        return NextResponse.json(deleteUser, {
            status: 201,
        })
    } catch (error) {
        console.log(error);
        return NextResponse.json({
            message: "Error deleting user!!!",
            success: false,
        }, {
            status: 500,
        })
    }
}