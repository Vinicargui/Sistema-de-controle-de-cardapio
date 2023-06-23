const Router = require("express").Router();
const Produto = require("../models/produto");
const upload = require("../config/multer");
const path = require("node:path");

Router.post("/", upload.single("image"), async (req, res) => {
  const { titulo, categoria, valor, descricao } = req.body;
  // const file = req.file;

  // if (!titulo) {
  //   res.status(422).json({ message: "existe campo não preenchido" });
  // }

  const produto = {
    titulo,
    categoria,
    imagem: req.file.filename,
    valor,
    descricao,
  };
  console.log(produto);
  try {
    const novoProduto = new Produto(produto);
    await novoProduto.save();
    res.status(201).json({ message: "Cadastrado com Sucesso!" });
  } catch (error) {
    res.status(500).json({ error: error });
  }
});

module.exports = Router;
