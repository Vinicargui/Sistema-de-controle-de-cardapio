const Router = require("express").Router();
const { response } = require("express");
const Produto = require("../models/produto");

Router.patch("/:id", async (req, res) => {
  const id = req.params.id;
  const { titulo, categoria, imagem, valor, descricao } = req.body;

  const produto = {
    titulo,
    categoria,
    imagem,
    valor,
    descricao,
  };

  try {
    await Produto.updateOne({ _id: id }, produto);
    res.json({ mensagem: "Pruduto atualizado com sucesso!" });
  } catch (error) {
    res.status(400).json({ errado: error });
  }
});


module.exports = Router;
