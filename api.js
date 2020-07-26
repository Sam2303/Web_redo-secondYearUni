const express = require('express');
const fs = require('fs');
const elem = {};
const api = express.Router();

api.post('/storeResults', async(req, res) => {
  const response = req.body;
  console.log(response);
  await res.json({success: true});
  let file = JSON.stringify(response);

  fs.writeFile('src/cssAndJS/json/responses.json',file, err => {
    if (err){console.log('ERROR!')}
    else{
      console.log('saved');}
    });
});


module.exports = api;
