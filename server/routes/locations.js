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
router.get("/:locationId", async (req, res) => {
  try {
    const location = await Location.findById(req.params.locationId);
    res.json(location);
  } catch (err) {
    res.json({ message: err });
  }
});

router.post("/", async (req, res) => {
  try {
    const voiture = await Voiture.findById(req.body.voiture);
    const client = await Client.findById(req.body.client);
    // "5e0a62e991f40c05bacb5406"
    // "5e0a6ea830f7510fc9a1e6db"
    const location = new Location({
      identifiant: req.body.identifiant,
      voiture: req.body.voiture,
      client: req.body.client,
      dateDebut: req.body.dateDebut,
      dateFin: req.body.dateFin,
      promotion: req.body.promotion,
      montant: req.body.montant,
      accident: req.body.accident
    });
    console.log(req.body.client);
    const savedLocation = await location.save();
    res.json(savedLocation);
  } catch (err) {
    res.json({ message: err });
  }
});
router.delete("/:locationId", async (req, res) => {
  try {
    const removedLocation = await Location.deleteOne({
      _id: req.params.locationId
    });
    res.json(removedLocation);
  } catch (err) {
    res.json({ message: err });
  }
});

module.exports = router;
