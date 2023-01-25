const express = require("express");
const booksRoute = require("./routes/booksRoute");
const cors = require("cors");
const PORT = 8080;
const app = express();

app.use(express.json());
app.use(cors());
app.use("/books", booksRoute);

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
