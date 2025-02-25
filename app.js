const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config();

const { client } = require("./server/db/widgets.js");

const PORT = process.env.PORT || 3000;

app.use(cors());
app.use("/api", require("./server/api"));

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
