const express = require("express");
const router = express.Router();
const Student = require("../models/Student");

router.get("/", async (req, res) => {
  try {
    const student = await Student.find();
    res.status(200).json({
      data: student,
    });
  } catch (error) {
    res.status(500).json({
      message: "Server error",
    });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const student = await Student.findById(req.params.id);

    res.status(200).json({
      data: student,
    });
  } catch (error) {
    res.status(500).json({
      message: "Server error",
    });
  }
});

router.post("/", async (req, res) => {
  try {
    const student = new Student(req.body);
    const newstudent = await student.save();

    res.status(200).json({
      data: newstudent,
    });
  } catch (err) {
    console.log(err);
    res.status(500).send("Server error");
  }
});



router.put("/:id", async (req, res) => {
  try {
    const student = await Student.findById(req.params.id);

    if (!student) {
      return res.status(400).json({ message: "Student does not exist" });
    }
    
    student.name = req.body.name || student.name;
    student.mobile = req.body.mobile || student.mobile;
    student.gender = req.body.gender || student.gender;

    const updatedStudent = await student.save();

    res.status(200).json({
      data: updatedStudent,
    });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: "Server error" });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    await Student.findByIdAndRemove(req.params.id);

    res.status(200).json({
      message: "Student is deleted",
    });
  } catch (error) {
    console.error(error);
    res.status(500).send("Server error");
  }
});

module.exports = router;
