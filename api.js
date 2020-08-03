const express = require('express');
const fs = require('fs');
const elem = {};
const api = express.Router();

api.post('/storeResults', async(req, res) => {
  const response = req.body;
  let file = JSON.stringify(response);
  await res.json({success: true});

    fs.writeFile('src/cssAndJS/json/responses.json', file , err => {
      if (err){console.log('ERROR!');}
      else{
        console.log('saved');}
      });
 });




module.exports = api;
