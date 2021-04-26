const express = require("express");
const app = express();
const axios = require("axios");

async function massage(types, callback) {
  var typeUrl = [];
  await types.forEach(type => {
    typeUrl.push(type.type.url);
    console.log(type.type.url)
  });
  callback(typeUrl);
}

app.get("/:name", (req, res) =>{
  var name = req.params.name;
  var types;

  axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`)
    .then(response => {
      massage(response.data.types, typeUrls => {
        res.send(typeUrls);
      });
    })
    .catch(err => {
      res.send(err);
    });
});

app.listen(8080, ()=> { console.log("Listening!"); });
