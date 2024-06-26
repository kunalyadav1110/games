const mongoose = require("mongoose")

const Kbc_Schema = mongoose.Schema({
    Questions : String,
    OptionA: String,
    OptionB: String,
    OptionC: String,
    OptionD: String,
    Answer: String,
})
module.exports = mongoose.model("Kbc", Kbc_Schema);