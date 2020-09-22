//Needed for unsplash
global.fetch = require("node-fetch");

///Config
const config = require("universal-config");
////
const Unsplash = require("unsplash-js").default;
const toJson = require("unsplash-js").toJson;
const express = require("express");

const unsplash = new Unsplash({
  accessKey: config.get("APPLICATION_ID"),
  secret: config.get("SECRET"),
  callbackUrl: config.get("CALLBACK_URL"),
});
const mme = config.get("SECRET");
console.log("######", mme);

const app = express();

app.get("/api/photos", (req, res) => {
  unsplash.photos
    .listPhotos(1, 4)
    .then(toJson)
    .then((json) => res.json(json));
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`server started on port ${PORT}`);
});
