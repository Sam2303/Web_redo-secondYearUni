const express = require('express');
const fs = require('fs');
const api = express.Router();


api.post('/storeResults', async (req, res) =>{

  const surveyResponse = req.body;
  console.log('Data Recieved');
  await res.json({success:true});
  fs.writeFile('src/cssAndJS/json/responses.json', JSON.stringify(surveyResponse), (err) => {
    if (err){throw err};
  });
});

module.exports = api;
