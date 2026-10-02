import mongoose from "mongoose";
const skillSchema = new mongoose.Schema({
    skillName:{
        type:String,
        required:true
    },
    level:{
        type:String,
        required:true,
        enum:["Beginner", "Intermediate", "Advanced"]
    },
    experience:{
        type:Number,
        required:true,
        min:0
    }
})
const employeeSchema = new mongoose.Schema(
    {
        employeeId:{
            type: String,
            required: true,
            unique: true
        },
        name:{
            type: String,
            required:true
        },
        age:{
            type: Number,
            Required:true,
            min:18
        },
        department:{
            type:String,
            required:true,
            enum:["IT", "HR", "Finance"]
        },
        salary:{
            type:Number,
            required:true,
            min:20000
        },
        city:{
            type:String,
            required:true
        },
        isActive:{
            type:Boolean,
            default:true
        },
        skills:[skillSchema]
    }
)

export const Employee = mongoose.model("Employee", employeeSchema)
