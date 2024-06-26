const express = require("express");
const router = express.Router();
const Ticket = require("../models/Ticket");

router.get("/", async (req, res) => {
  try {
    const ticket = await Ticket.find();
    res.status(200).json({
      data: ticket,
    });
  } catch (error) {
    res.status(500).json({
      message: "Server error",
    });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const ticket = await Ticket.findById(req.params.id);

    res.status(200).json({
      data: ticket,
    });
  } catch (error) {
    res.status(500).json({
      message: "Server error",
    });
  }
});

router.post("/", async (req, res) => {
  try {
    const ticket = new Ticket(req.body);
    const newticket = await ticket.save();

    res.status(200).json({
      data: newticket,
    });
  } catch (err) {
    console.log(err);
    res.status(500).send("Server error");
  }
});



router.put("/:id", async (req, res) => {
  try {
    const ticket = await Ticket.findById(req.params.id);

    if (!ticket) {
      return res.status(400).json({ message: "Ticket does not exist" });
    }
    
    ticket.seatNo = req.body.seatNo || ticket.seatNo;

    const updatedTicket = await ticket.save();

    res.status(200).json({
      data: updatedTicket,
    });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: "Server error" });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    await Ticket.findByIdAndRemove(req.params.id);

    res.status(200).json({
      message: "Ticket is deleted",
    });
  } catch (error) {
    console.error(error);
    res.status(500).send("Server error");
  }
});

module.exports = router;
