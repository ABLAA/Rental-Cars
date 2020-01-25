const mongoose = require("mongoose");

const LocationSchema = mongoose.Schema({
  identifiant: {
    type: Number,
    required: false
  },
  dateDebut: {
    type: Date,
    required: false
  },
  dateFin: {
    type: Date,
    required: false
  },
  voiture: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Voiture",
    required: false
  },
  client: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Client",
    required: false
  },
  promotion: {
    type: Number,
    required: false
  },
  montant: {
    type: Number,
    required: false
  },
  accident: [
    {
      date: {
        type: Date,
        required: false
      },
      lieu: {
        type: String,
        required: false
      },
      description: {
        type: String,
        required: false
      }
    }
  ]
});

module.exports = mongoose.model("Location", LocationSchema);
