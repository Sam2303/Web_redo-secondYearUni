const express = require('express');
const fetch = require("node-fetch");
const api = express.Router();


api.get('/questionnairePrint', async (req, res) => {

  const response = await fetch('./src/JSON/example-questionnaire.json');
  const data = await response.json();

  await res.json({
    data
  });
});


module.exports = api;
