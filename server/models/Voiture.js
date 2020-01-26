const mongoose = require("mongoose");

const VoitureSchema = mongoose.Schema({
  numChasis: {
    type: Number,
    required: true
  },
  numImmatriculation: {
    type: Number,
    required: true
  },
  marque: {
    type: String,
    required: false
  },
  modele: {
    type: String,
    required: false
  },
  datePMC: {
    type: Date,
    required: false
  },
  puissanceFiscal: {
    type: Number,
    required: false
  },
  nombreCilyndre: {
    type: Number,
    required: false
  },
  prixLocation: {
    type: Number,
    required: false
  },
  assurence: {
    assurreur: {
      type: String,
      required: false
    },
    type: {
      type: String,
      required: false
    },
    cotisation: {
      type: Number,
      required: false
    }
  },
  imgURL: {
    type: String,
    require: false
  }
});

module.exports = mongoose.model("Voiture", VoitureSchema);
