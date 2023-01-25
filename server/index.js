const express = require("express");
const axios = require("axios");

const PORT = process.env.PORT || 3001;

const app = express();

let url =
  "https://api.artic.edu/api/v1/artworks/search?q=impressionism&limit=10";

let imageIdArr = [];

axios
  .get(url)
  .then((res) => {
    // console.log("axios called");
    const requests = res.data.data.map((url) => axios.get(url.api_link));
    axios.all(requests).then((responses) => {
      responses.forEach((resp) => {
        imageIdArr.push(resp.data.data.image_id);
      });
    });
  })
  .catch((err) => {
    console.log("Error: ", err.message);
  });

app.get("/artwork", (req, res) => {
  res.json({
    idArr: imageIdArr,
  });
});

app.get("/api", (req, res) => {
  res.json({ message: "Hello from server!" });
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
