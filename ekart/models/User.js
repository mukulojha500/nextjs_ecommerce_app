import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        default: "user" + (Math.floor(Math.random() * 10000) + 1).toString(),
    },
    email: {
        type: String,
        unique: true,
        required: true,
    },
    phoneNumber: {
        type: String,
        unique: true,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    address: {
        type: String,
    },
    items: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Product' // Referencing the Product model
    }]
})

const User = mongoose.models.users || mongoose.model("users", userSchema);

export default User;