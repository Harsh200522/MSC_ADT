import mongoose from "mongoose";


const employeeSchema = new mongoose.Schema({
    employeeID:{
        type:String,
        required:true,
        unique:true
    },
    name:{
        type:String,
        required:true
    },
    age:{
        type:Number,
        required:true,
        min:18
    },
    department:{
        type:String,
        required:true,
        enum:["HR","IT","Sales"]
    },
    salary:{
        type:Number,
        require:true,
        min:15000
    },
    city:{
        type:String,
        required:true
    },
    experience:{
        type:Number,
        required:true,
        min:0
    },
    isActive:{
        type:Boolean,
        default:true
    }
})

export const Employee= mongoose.model("Employee",employeeSchema);