const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workNoteSchema = new Schema(
  {
    date: {
      type: String,
      require: true,
    },
    tags: Array,
    highlights: Array,
    report: String,
  },
  { timestamps: true }
);

module.exports = mongoose.model("WorkNote", workNoteSchema);
