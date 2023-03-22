const express = require("express");
const axios = require("axios");

const PORT = process.env.PORT || 3001;

const app = express();

// let testUrl = `https://api.artic.edu/api/v1/artworks/search?q=romanticism&limit=20`;

// let imageIdArr = [];

const callApi = (style) => {
  let imageIdArr = [];
  return axios
    .get(`https://api.artic.edu/api/v1/artworks/search?q=${style}&limit=20`)
    .then(async (res) => {
      console.log("axios called");
      const requests = res.data.data.map((url) => axios.get(url.api_link));
      await axios.all(requests).then((responses) => {
        responses.forEach((resp) => {
          imageIdArr.push(resp.data.data.image_id);
        });
      });

      return imageIdArr;
    })
    .catch((err) => {
      console.log("Error: ", err.message);
    });
};

app.get("/api", (req, res) => {
  res.json({ message: "Hello from server!" });
});

app.get("/pop_art", async (req, res) => {
  let popArtArray = await callApi("pop art");
  res.json({
    idArr: popArtArray,
  });
});

app.get("/surrealism", async (req, res) => {
  let surrealismArray = await callApi("surrealism");
  res.json({
    idArr: surrealismArray,
  });
});

app.get("/impressionism", async (req, res) => {
  let impressionismArray = await callApi("impressionism");
  res.json({
    idArr: impressionismArray,
  });
});

app.get("/romanticism", async (req, res) => {
  let romanticismArray = await callApi("romanticism");
  res.json({
    idArr: ["badimage", ...romanticismArray],
  });
});

app.get("/expressionism", async (req, res) => {
  try {
    let expressionismArray = await callApi("expressionism");
    res.json({
      idArr: expressionismArray,
    });
  } catch (error) {
    console.error(err.response.data);
  }
});

app.get("/rococo", async (req, res) => {
  let rococoArray = await callApi("rococo");
  res.json({
    idArr: rococoArray,
  });
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
