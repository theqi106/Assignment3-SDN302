const express = require("express");
const mongoose = require("mongoose");
const studentRoutes = require("./src/routers/student");
require("dotenv").config();

const app = express();
app.use(express.json());

app.get("/info", (req, res) => {
  res.json({
    data: {
      fullName: "Nguyen Van A",
      studentCode: "QNUO1234",
    },
  });
});

app.use(studentRoutes);

mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log(err));

const port = process.env.PORT || 4000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
