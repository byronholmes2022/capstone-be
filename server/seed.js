require("dotenv").config();
const {
  client,
  createTables,
  createWidget,
  fetchWidgets,
} = require("./db/widgets.js");

const seedDb = async () => {
  try {
    await client.connect();
    await createTables();
    console.log("Creating widgets...");
    const [widget1, widget2, widget3] = await Promise.all([
      createWidget("machinator"),
      createWidget("code combobulator"),
      createWidget("carpet vencillator"),
    ]);
    console.log("Widgets created!");
    console.log("Here are all the widgets...");
    console.log(await fetchWidgets());
  } catch (err) {
    console.error(err);
  } finally {
    client.end();
  }
};

seedDb();
