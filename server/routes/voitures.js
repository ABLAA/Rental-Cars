const express = require("express");
const router = express.Router();
const Voiture = require("../models/Voiture");

router.get("/", async (req, res) => {
  try {
    const voitures = await Voiture.find();
    res.json(voitures);
  } catch (err) {
    res.json({ message: err });
  }
});

router.post("/", async (req, res) => {
  const voiture = new Voiture({
    numChasis: req.body.numChasis,
    numImmatriculation: req.body.numImmatriculation
  });
  console.log(req.body);
  try {
    const savedVoiture = await voiture.save();
    res.json(savedVoiture);
  } catch (err) {
    res.json({ message: err });
  }
});

module.exports = router;
