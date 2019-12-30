const express = require("express");
const router = express.Router();
const Client = require("../models/Client");

router.get("/", async (req, res) => {
  try {
    const clients = await Client.find();
    res.json(clients);
  } catch (err) {
    res.json({ message: err });
  }
});

router.post("/", async (req, res) => {
  const client = new Client({
    numeroCIN: req.body.numeroCIN,
    numPermis: req.body.numPermis
  });
  console.log(req.body);
  try {
    const savedClient = await client.save();
    res.json(savedClient);
  } catch (err) {
    res.json({ message: err });
  }
});

module.exports = router;
