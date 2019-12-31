const express = require("express");
const router = express.Router();
const Location = require("../models/Location");
const Client = require("../models/Client");
const Voiture = require("../models/Voiture");

router.get("/", async (req, res) => {
  try {
    const locations = await Location.find();
    res.json(locations);
  } catch (err) {
    res.json({ message: err });
  }
});

router.post("/", async (req, res) => {
  try {
    const voiture = await Voiture.findById("5e0a62e991f40c05bacb5406");
    const client = await Client.findById("5e0a6ea830f7510fc9a1e6db");

    const location = new Location({
      identifiant: req.body.identifiant,
      voiture: voiture,
      client: client
    });
    console.log(req.body);
    console.log(client);
    const savedLocation = await location.save();
    res.json(savedLocation);
  } catch (err) {
    res.json({ message: err });
  }
});

module.exports = router;
