const Router = require("express").Router();
const Produto = require("../models/produto");

Router.delete("/:id", async (req, res) => {
  try {
    const produto = Produto.deleteOne({ _id: req.params.id });
    await produto;
    res.json({ mensagem: "Pruduto deletado com sucesso!" });
  } catch (error) {
    res.status(400).json({ errado: error });
  }
});

module.exports = Router;
