const Router = require("express").Router();
const Produto = require("../models/produto");

Router.get("/:id", async (req, res) => {
  const id = req.params.id;
  console.log(id);
  try {
    const produto = await Produto.findById(id);
    return res.json(produto);
  } catch (error) {
    res.status(500).json({ errado: error });
  }
});

module.exports = Router;
