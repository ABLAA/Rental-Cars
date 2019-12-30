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
  const location = new Location({
    identifiant: req.body.identifiant
    // voiture: Voiture.findById("5e0a6ea830f7510fc9a1e6db")._id,
    // client: {
    //   _id: "5e0a6ea830f7510fc9a1e6db",
    //   numeroCIN: 11,
    //   numPermis: 12,
    //   __v: 0
    // }
  });
  console.log(req.body);
  console.log(Voiture.findById("5e0a6ea830f7510fc9a1e6db")._);
  try {
    const savedLocation = await location.save();
    res.json(savedLocation);
  } catch (err) {
    res.json({ message: err });
  }
});

module.exports = router;
