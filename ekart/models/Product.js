import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    price:{
        type:Number,
        default:0,
    },
    categeory:{
        type:[String],
        required:true,
    },
    description:{
        type:String,
        required:true,
    },
    ratings:{
        type:Number,
        default:0,
    },
    reviews:{
        type:[String],
        default:[],
    },
    img:{
        type:String,
        required:true,
    }
})

const Product = mongoose.models.products || mongoose.model("products", productSchema);

export default Product;