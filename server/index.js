const express = require("express");
const axios = require("axios");
const PORT = process.env.PORT || 3001;
const app = express();
require("dotenv").config();

const callArtApi = (style) => {
  let imageIdArr = [];
  return axios
    .get(`https://api.artic.edu/api/v1/artworks/search?q=${style}&limit=20`)
    .then(async (res) => {
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

app.get("/default_art", async (req, res) => {
  let defaultArtArray = await callArtApi("monet");
  res.json({ idArr: defaultArtArray });
});

app.get("/pop_art", async (req, res) => {
  let popArtArray = await callArtApi("pop art");
  res.json({
    idArr: popArtArray,
  });
});

app.get("/surrealism", async (req, res) => {
  let surrealismArray = await callArtApi("surrealism");
  res.json({
    idArr: surrealismArray,
  });
});

app.get("/impressionism", async (req, res) => {
  let impressionismArray = await callArtApi("impressionism");
  res.json({
    idArr: impressionismArray,
  });
});

app.get("/modern", async (req, res) => {
  let modernArray = await callArtApi("modern");
  res.json({
    idArr: ["badimage", ...modernArray],
  });
});

app.get("/expressionism", async (req, res) => {
  try {
    let expressionismArray = await callArtApi("expressionism");
    res.json({
      idArr: expressionismArray,
    });
  } catch (error) {
    console.error(err.response.data);
  }
});

app.get("/rococo", async (req, res) => {
  let rococoArray = await callArtApi("rococo");
  res.json({
    idArr: rococoArray,
  });
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});

const APIkey = process.env.APIKEY;

const callWeatherApi = (city) => {
  return axios
    .get(`http://api.weatherapi.com/v1/current.json?key=${APIkey}&q=${city}`)
    .then(async (res) => {
      let weatherNow = await res.data;

      return weatherNow;
    })
    .catch((err) => {
      console.log("Error: ", err.message);
    });
};

app.get("/melbourne", async (req, res) => {
  let currentWeather = await callWeatherApi("melbourne");
  res.json(currentWeather);
});

app.get("/tokyo", async (req, res) => {
  let currentWeather = await callWeatherApi("tokyo");
  res.json(currentWeather);
});

app.get("/newYork", async (req, res) => {
  let currentWeather = await callWeatherApi("new_york");
  res.json(currentWeather);
});

app.get("/london", async (req, res) => {
  let currentWeather = await callWeatherApi("london");
  res.json(currentWeather);
});

app.get("/paris", async (req, res) => {
  let currentWeather = await callWeatherApi("paris");
  res.json(currentWeather);
});

app.get("/default", async (req, res) => {
  let currentWeather = await callWeatherApi("melbourne");
  res.json(currentWeather);
});

const gifApiKey = process.env.giphyKey;

const callGifApi = () => {
  return axios
    .get(
      `https://api.giphy.com/v1/gifs/search?api_key=${gifApiKey}&q=funny&limit=20`
    )
    .then(async (res) => {
      let gif = await res;
      return gif.data.data;
    })
    .catch((err) => {
      console.log("Error: ", err.message);
    });
};

app.get("/tv", async (req, res) => {
  let tvImages = await callGifApi();
  res.json(tvImages);
});
