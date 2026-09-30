import mongoose from "mongoose";

const productSchema= new mongoose.Schema({
    productID:{
        type: String,
        required: true
    },
    name:{
        type: String,
        required:true
    },
    category:{
        type: String,
        required:true,
        enum: ['Electronics', 'Stationary']
    },
    price:{
        type: Number,
        required:true,
        min:0
    },
    stock:{
        type: Number,
        required: true,
        min: 0
    },
    supplierCity:{
        type: String,
        required:true
    },
    isActive:{
        type:Boolean,
        default:true
    }
});

export const Product= mongoose.model('Product', productSchema);