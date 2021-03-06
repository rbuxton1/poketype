const express = require("express");
const app = express();
const axios = require("axios");

app.set("view engine", "ejs");
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.render("index");
});

async function massage(types, callback) {
  var ret = [];

  for(var type of types) {
    await axios.get(type.type.url)
      .then(res => {
        ret.push({
          type: res.data.name,
          damage_relations: res.data.damage_relations
        });
      })
      .catch(err => callback(err));
  }

  callback(ret);
}

app.get("/:name", (req, res) =>{
  var name = req.params.name;

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
