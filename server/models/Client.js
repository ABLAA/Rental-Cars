const mongoose = require("mongoose");

const ClientSchema = mongoose.Schema({
  numeroCIN: {
    type: Number,
    required: true
  },
  numPermis: {
    type: Number,
    required: true
  },
  nom: {
    type: String,
    required: false
  },
  prenom: {
    type: String,
    required: false
  },
  dateNaissance: {
    type: Date,
    required: false
  },
  adresse: {
    type: String,
    required: false
  }
});

module.exports = mongoose.model("Client", ClientSchema);
