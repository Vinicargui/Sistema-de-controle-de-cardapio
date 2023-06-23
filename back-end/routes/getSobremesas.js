const Router = require("express").Router();
const Produto = require("../models/produto");

Router.get("/", async (req, res) => {
  try {
    const produto = await Produto.find({ categoria: "sobremesa" });
    console.log(produto);
    return res.json(produto);
  } catch (error) {
    res.status(500).json({ errado: error });
  }
});

module.exports = Router;
