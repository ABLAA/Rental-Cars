const express = require("express");
const router = express.Router();
const Client = require("../models/Client");
const Location = require("../models/Location");

router.get("/", async (req, res) => {
  try {
    const clients = await Client.find();
    res.json(clients);
  } catch (err) {
    res.json({ message: err });
  }
});
router.get("/count", async (req, res) => {
  try {
    const clientsCount = await Client.countDocuments();
    res.json(clientsCount);
  } catch (err) {
    res.json({ message: err });
  }
});
router.get("/location/:clientId", async (req, res) => {
  try {
    const clientsLocations = await Location.find({
      client: req.params.clientId
    });
    res.json(clientsLocations);
  } catch (err) {
    res.json({ message: err });
  }
});
router.get("/location/:clientId", async (req, res) => {
  try {
    const clientsLocations = await Location.find({
      client: req.params.clientId
    });
    res.json(clientsLocations);
  } catch (err) {
    res.json({ message: err });
  }
});
router.get("/clientMaxLocation", async (req, res) => {
  try {
    const clientsLocation = await Location.aggregate([
      { $group: { _id: "$client" } }
    ]);

    res.json(clientsLocation);
  } catch (err) {
    res.json({ message: err });
  }
});

router.post("/", async (req, res) => {
  const client = new Client({
    numeroCIN: req.body.numeroCIN,
    numPermis: req.body.numPermis,
    nom: req.body.nom,
    prenom: req.body.prenom,
    dateNaissance: req.body.dateNaissance,
    adresse: req.body.adresse
  });
  console.log(req.body);
  try {
    const savedClient = await client.save();
    res.json(savedClient);
  } catch (err) {
    res.json({ message: err });
  }
});

router.delete("/:clientId", async (req, res) => {
  try {
    const removedClient = await Client.deleteOne({ _id: req.params.clientId });
    res.json(removedClient);
  } catch (err) {
    res.json({ message: err });
  }
});
router.put("/:clientId", async (req, res) => {
  try {
    const updatedClient = await Client.updateOne(
      { _id: req.params.clientId },
      {
        $set: {
          numPermis: req.body.numPermis,
          numeroCIN: req.body.numeroCIN,
          nom: req.body.nom,
          prenom: req.body.prenom,
          dateNaissance: req.body.dateNaissance,
          adresse: req.body.adresse
        }
      }
    );
    res.json(updatedClient);
  } catch (err) {
    res.json({ message: err });
  }
});

module.exports = router;
