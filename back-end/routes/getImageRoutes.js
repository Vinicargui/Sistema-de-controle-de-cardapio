const router = require("express").Router();
const Produto = require("../models/produto");
const path = require("node:path");

router.get("/:imageName", async (req, res) => {
  const { imageName } = req.params;
  // const path = require("node:path");

  try {
    res.sendFile(`${imageName}`, {
      root: path.join(__dirname, "../uploads"),
    });
    // res.sendFile(`../uploads/1684070459092.png`, { root: __dirname });
    console.log(__dirname);
  } catch (error) {
    res.send(error);
  }
});

module.exports = router;
