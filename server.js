//Needed for unsplash
global.fetch = require("node-fetch");

require("dotenv").config();

///Config
const config = require("universal-config");
////
const Unsplash = require("unsplash-js").default;
const toJson = require("unsplash-js").toJson;
const express = require("express");

const unsplash = new Unsplash({
  accessKey: process.env.APPLICATION_ID,
  secret: process.env.SECRET,
  callbackUrl: process.env.CALLBACK_URL,
});
const mme = process.env.SECRET;
console.log("######", mme);

const app = express();

app.get("/api/photos", (req, res) => {
  unsplash.photos
    .listPhotos(req.query.start, req.query.count)
    .then(toJson)
    .then((json) => res.json(json));
});
if (process.env.NODE_ENV === "production") {
  // Exprees will serve up production assets
  app.use(express.static("client/build"));

  // Express serve up index.html file if it doesn't recognize route
  const path = require("path");
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`server started on port ${PORT}`);
});
