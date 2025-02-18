const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config();

const { client } = require("./db.js");

const PORT = process.env.PORT || 3000;

const { fetchWidgets } = require("./db.js");

app.use(cors());

app.get("/api/widgets", async (req, res, next) => {
  res.send(await fetchWidgets());
});

const init = async () => {
  try {
    await client.connect();

    app.listen(PORT, () => {
      console.log(`Server alive on port ${PORT}`);
    });
  } catch (err) {
    console.log(err);
  }
};

init();
