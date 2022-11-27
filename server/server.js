require("dotenv").config();

const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const workNotesRoutes = require("./routes/workNotes");

// express app
const app = express();

// middleware
app.use(express.json());

// cors
app.use(
  cors({
    origin: "http://localhost:5173",
  })
);

app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

// routes
app.use("/api/work-notes", workNotesRoutes);

// connect to db
mongoose
  .connect(process.env.ATLAS_URI)
  .then(() => {
    console.log("connected to database");
    // listen to port
    app.listen(process.env.PORT, () => {
      console.log("listening for requests on port", process.env.PORT);
    });
  })
  .catch((err) => {
    console.log(err);
  });
