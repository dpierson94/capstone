const mongoose = require("mongoose");

const formsSchema = new mongoose.Schema ({
  servicename: {
    type: String,
    required: true,
    validate: /^[A-Za-z0-9 ]*$/
  },
  client: {
    type: String,
    required: true,
    validate: /^[A-Za-z0-9 ]*$/
  },
  address: {
    type: String,
    required: true,
    validate: /^[A-Za-z0-9 ]*$/
  },
  city: {
    type: String,
    required: true,
    validate: /^[A-Za-z0-9 ]*$/
  },
  zipcode: {
    type: String,
    required: true,
    validate: /^[A-Za-z0-9 ]*$/
  },
  applicationdate: {
    type: String,
    required: true,
    validate: /^[A-Za-z0-9 ]*$/
  },
  timestarted: {
    type: String,
    required: true,
    validate: /^[A-Za-z0-9 ]*$/
  },
  timestopped: {
    type: String,
    required: true,
    validate: /^[A-Za-z0-9 ]*$/
  },
  applicatorname: {
    type: String,
    required: true,
    validate: /^[A-Za-z0-9 ]*$/
  },
  applicatorlicense: {
    type: String,
    required: true,
    validate: /^[A-Za-z0-9 ]*$/
  },
  herbicideamount: {
    type: String,
    required: true,
    validate: /^[A-Za-z0-9 ]*$/
  },
  herbicideapplied: {
    type: String,
    required: true,
    validate: /^[A-Za-z0-9 ]*$/
  },
  herbiciderate: {
    type: String,
    required: true,
    validate: /^[A-Za-z0-9 ]*$/
  },
  herbicideepa: {
    type: String,
    required: true,
    validate: /^[A-Za-z0-9 ]*$/
  },
  surfactant: {
    type: String,
    required: true,
    validate: /^[A-Za-z0-9 ]*$/
  },
  surfactantrate: {
    type: String,
    required: true,
    validate: /^[A-Za-z0-9 ]*$/
  },
  surfactantepa: {
    type: String,
    required: true,
    validate: /^[A-Za-z0-9 ]*$/
  },
  additionalmaterials: {
    type: String,
    required: true,
    validate: /^[A-Za-z0-9 ]*$/
  },
  targetspecies: {
    type: String,
    required: true,
    validate: /^[A-Za-z0-9 ]*$/
  },
  temperature: {
    type: String,
    required: true,
    validate: /^[A-Za-z0-9 ]*$/
  },
  humidity: {
    type: String,
    required: true,
    validate: /^[A-Za-z0-9 ]*$/
  },
  winddirection: {
    type: String,
    required: true,
    validate: /^[A-Za-z0-9 ]*$/
  },
  windspeed: {
    type: String,
    required: true,
    validate: /^[A-Za-z0-9 ]*$/
  },
  cloudcover: {
    type: String,
    required: true,
    validate: /^[A-Za-z0-9 ]*$/
  },
});

const Invasive = mongoose.model('Invasive', formsSchema);

module.exports = Invasive;
