import mongoose from 'mongoose';

const customerSchema = new mongoose.Schema({
    customerId:{
        type: String,
        required: true,
        unique: true
    },
    name:{
        type: String,
        required:true
    },
    email:{
        type: String,
        required: true,
        unique: true
    },
    city:{
        type: String,
        required:true
    },
    phone:{
        type: String,
        required: true
    },
    isActive:{
        type:Boolean,
        default: true
    }
});

export default mongoose.model("Customer",customerSchema);