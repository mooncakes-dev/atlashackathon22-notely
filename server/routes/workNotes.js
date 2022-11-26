const express = require("express");
const router = express.Router();

const {
  getWorkNotes,
  getWorkNote,
  createWorkNote,
  deleteWorkNote,
  updateWorkNote,
} = require("../controllers/workNoteController");

// GET all workouts
router.get("/", getWorkNotes);

// GET a single workout
router.get("/:id", getWorkNote);

// POST a new workout
router.post("/", createWorkNote);

// DELETE a workout
router.delete("/:id", deleteWorkNote);

// UPDATE a workout
router.patch("/:id", updateWorkNote);

module.exports = router;
