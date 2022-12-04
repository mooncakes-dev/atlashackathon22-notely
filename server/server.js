require("dotenv").config();

const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const workNotesRoutes = require("./routes/workNotes");

// express app
const app = express();

// middleware
app.use(express.json());

const client = new MongoClient(process.env.ATLAS_URI);
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
app.get("/search", async (request, response) => {
  try {
    let result = await client
      .db("test")
      .collection("worknotes")
      .aggregate([
        {
          $search: {
            autocomplete: {
              query: `${request.query.term}`,
              path: "tags",
              fuzzy: {
                maxEdits: 2,
              },
            },
          },
        },
      ])
      .toArray();
    response.send(result);
  } catch (e) {
    response.status(500).send({ message: e.message });
  }
});

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
