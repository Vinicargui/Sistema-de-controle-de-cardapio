const mongoose = require("mongoose");

const Produto = mongoose.model("Produto", {
  id: String,
  titulo: String,
  categoria: String,
  imagem: String,
  valor: Number,
  descricao: String,
});

module.exports = Produto;
