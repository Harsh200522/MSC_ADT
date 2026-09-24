const mongoose = require('mongoose');

const StudentSchema= new mongoose.Schema({
    studentID: {type: String , required: true, unique: true},
    name: {type: String, required: true},
    age: {type: Number, required: true, min: 18},
    course: {type: mongoose.Schema.Types.ObjectId, ref: 'course', required: true},
    marks: {type: Number, required: true, min: 0, max: 100},
    city: {type: String, required: true},
    isActive: {type: Boolean, Required: true}
});

const Student = mongoose.model('Student',StudentSchema,'students');

module.exports= Student;