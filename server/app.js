const express = require("express");
const mongoose = require("mongoose");
const app = express();
const cors = require("cors");
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//Import Routes using Middlwares
app.use(cors());
const voituresRoute = require("./routes/voitures");
app.use("/voitures", voituresRoute);

const clientsRoute = require("./routes/clients");
app.use("/clients", clientsRoute);

const locationsRoute = require("./routes/locations");
app.use("/locations", locationsRoute);
//Connect to DB
mongoose.connect(
  "mongodb+srv://abla:123@cluster0-okx9d.mongodb.net/locationVoiture",
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => console.log("conected to data Base")
);

//START LISTENING TO THE SERVER
app.listen(3000);
