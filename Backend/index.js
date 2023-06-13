const express = require("express");
const cors = require("cors")
const port = process.env.PORT || 5000;

const app = express();
const actualite = require("./routes/actualite.js");

app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use("/api/actualite", actualite);


app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
