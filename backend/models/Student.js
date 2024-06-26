const mongoose = require("mongoose")

const StudentSchema = mongoose.Schema({
    name : String,
    mobile: Number,
    gender: String
    

    })

module.exports = mongoose.model("Student", StudentSchema);