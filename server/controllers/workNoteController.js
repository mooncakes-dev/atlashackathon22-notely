const WorkNote = require("../models/workNoteModel");

const mongoose = require("mongoose");

// Get All Work Notes

const getWorkNotes = async (req, res) => {
  const workNotes = await WorkNote.find({}).sort({ createdAt: -1 });

  res.status(200).json(workNotes);
};

// Get a single work note

const getWorkNote = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "Records owl says wrong type of id" });
  }

  const workNote = await WorkNote.findById(id);

  if (!workNote) {
    return res
      .status(404)
      .json({ error: "Our records owl seem to have lost this entry" });
  }

  res.status(200).json(workNote);
};

// Create a new work note

const createWorkNote = async (req, res) => {
  const { date, tags, highlights, report } = req.body;

  //add doc to db
  try {
    const workNote = await WorkNote.create({
      date,
      tags,
      highlights,
      report,
    });
    res.status(200).json(workNote);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
// Delete a work note

const deleteWorkNote = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "Records owl says wrong type of id" });
  }

  const workNote = await WorkNote.findOneAndDelete({ _id: id });

  if (!workNote) {
    return res
      .status(404)
      .json({ error: "Our records owl cannot find this entry to delete" });
  }

  res.status(200).json("This day has been swept under the rug.");
};

// Update a work note
const updateWorkNote = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "Records owl says wrong type of id" });
  }

  const workNote = await WorkNote.findOneAndUpdate(
    { _id: id },
    { ...req.body }
  );

  if (!workNote) {
    return res
      .status(404)
      .json({ error: "Our records owl cannot find this entry to update" });
  }

  res.status(200).json("Record has been updated.");
};

module.exports = {
  getWorkNotes,
  getWorkNote,
  createWorkNote,
  deleteWorkNote,
  updateWorkNote,
};
