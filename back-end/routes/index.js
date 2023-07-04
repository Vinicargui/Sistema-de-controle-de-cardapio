const Router = require("express").Router();
const upload = require("../config/multer");
const Produto = require("../models/produto");
const path = require("node:path");
const {
  deleteProduto,
  getBebidas,
  getImagens,
  getPratos,
  getSobremesas,
  getProdutos,
  getProduto,
  patchProduto,
  postProduto,
} = require("../controllers/produto");
Router.get("/produtos", getProdutos);
Router.delete("/:id", deleteProduto);
Router.get("/bebidas", getBebidas);
Router.get("/pratos", getPratos);
Router.get("/sobremesas", getSobremesas);
Router.get("/produto/:id", getProduto);
Router.post("/produtos", upload.single("image"), postProduto);
Router.patch("/:id", patchProduto);
Router.get("/:imageName", getImagens);

module.exports = Router;
