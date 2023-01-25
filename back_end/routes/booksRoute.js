`const express = require("express");
const { addReadBookModel } = require("../db_models");
const router = express.Router();

router.post("/add", async (req, res) => {
  try {
    const { bookId, userId } = req.body;
    const data = await addReadBookModel(bookId, userId);

    res.send(true);
  } catch (error) {
    console.error(error);
    res.status(500).send(error);
  }
});

module.exports = router;
