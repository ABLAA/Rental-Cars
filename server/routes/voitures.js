const express = require("express");
const router = express.Router();
const Voiture = require("../models/Voiture");
const Location = require("../models/Location");

router.get("/", async (req, res) => {
  try {
    const voitures = await Voiture.find();
    res.json(voitures);
  } catch (err) {
    res.json({ message: err });
  }
});

router.get("/:voitureId", async (req, res) => {
  try {
    const voitures = await Voiture.findById({ _id: req.params.voitureId });
    res.json(voitures);
  } catch (err) {
    res.json({ message: err });
  }
});
router.get("/disponible", async (req, res) => {
  try {
    const voituesLocation = await Location.find();
    voituesLocation.aggregate([
      { $match: {} },
      { $group: { _id: "$numChasis", total: { $sum: "$numeroCIN" } } }
    ]);
    res.json(voitures);
  } catch (err) {
    res.json({ message: err });
  }
});

router.get("/marque/:marque", async (req, res) => {
  try {
    const voitures = await Voiture.find({ marque: req.params.marque });
    res.json(voitures);
  } catch (err) {
    res.json({ message: err });
  }
});
router.get("/count", async (req, res) => {
  try {
    const voituresCount = await Voiture.countDocuments();
    res.json(voituresCount);
  } catch (err) {
    res.json({ message: err });
  }
});
router.get("/location/:voitureId", async (req, res) => {
  try {
    const voituresLocations = await Location.find({
      voiture: req.params.voitureId
    });
    res.json(voituresLocations);
  } catch (err) {
    res.json({ message: err });
  }
});
router.get("/location/:voitureId", async (req, res) => {
  try {
    const voituesLocations = await Location.find({
      client: req.params.voitureId
    });
    res.json(voituesLocations);
  } catch (err) {
    res.json({ message: err });
  }
});
router.get("/clientMaxLocation", async (req, res) => {
  try {
    const voituesLocation = await Location.find();
    voituesLocation.aggregate([
      { $match: {} },
      { $group: { _id: "$client", total: { $sum: "$numeroCIN" } } }
    ]);
    res.json(clientsLocation);
  } catch (err) {
    res.json({ message: err });
  }
});

router.post("/", async (req, res) => {
  const voiture = new Voiture({
    numChasis: req.body.numChasis,
    numImmatriculation: req.body.numImmatriculation,
    marque: req.body.marque,
    modele: req.body.modele,
    datePMC: req.body.datePMC,
    nombreCilyndre: req.body.nombreCilyndre,
    prixLocation: req.body.prixLocation,
    assurence: req.body.assurence,
    imgURL: req.body.imgURL
  });
  console.log(req.body);
  try {
    const savedVoiture = await voiture.save();
    res.json(savedVoiture);
  } catch (err) {
    res.json({ message: err });
  }
});

router.delete("/:voitureId", async (req, res) => {
  try {
    const removedVoiture = await Voiture.deleteOne({
      _id: req.params.voitureId
    });
    res.json(removedVoiture);
  } catch (err) {
    res.json({ message: err });
  }
});
router.put("/:voitureId", async (req, res) => {
  try {
    const updatedCar = await Voiture.updateOne(
      { _id: req.params.voitureId },
      {
        $set: {
          marque: req.body.marque,
          modele: req.body.modele
        }
      }
    );
    res.json(updatedCar);
  } catch (err) {
    res.json({ message: err });
  }
});

module.exports = router;
