const mongoose = require("mongoose")

const TicketSchema = mongoose.Schema({
    seatNo : Array
    

    })

module.exports = mongoose.model("Ticket", TicketSchema);