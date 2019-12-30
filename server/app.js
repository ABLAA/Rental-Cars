const express = require("express");
const mongoose = require("mongoose");
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//Import Routes using Middlwares
const voitureRoute = require("./routes/voitures");
app.use("/voitures", voitureRoute);

//Connect to DB
mongoose.connect(
  "mongodb+srv://abla:123@cluster0-okx9d.mongodb.net/locationVoiture",
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => console.log("conected to data Base")
);

//START LISTENING TO THE SERVER
app.listen(3000);
