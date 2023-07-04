const Produto = require("../../models/produto");
const path = require("node:path");

const deleteProduto = async (req, res) => {
  try {
    const produto = Produto.deleteOne({ _id: req.params.id });
    await produto;
    res.json({ mensagem: "Pruduto deletado com sucesso!" });
  } catch (error) {
    res.status(400).json({ errado: error });
  }
};

const getBebidas = async (req, res) => {
  try {
    const produto = await Produto.find({ categoria: "bebidas" });
    console.log(produto);
    return res.json(produto);
  } catch (error) {
    res.status(500).json({ errado: error });
  }
};

const getPratos = async (req, res) => {
  try {
    const produto = await Produto.find({ categoria: "pratos" });
    console.log(produto);
    return res.json(produto);
  } catch (error) {
    res.status(500).json({ errado: error });
  }
};

const getImagens = async (req, res) => {
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
};

const getSobremesas = async (req, res) => {
  try {
    const produto = await Produto.find({ categoria: "sobremesa" });
    console.log(produto);
    return res.json(produto);
  } catch (error) {
    res.status(500).json({ errado: error });
  }
};

const getProdutos = async (req, res) => {
  try {
    const produto = await Produto.find();
    return res.json(produto);
  } catch (error) {
    res.status(500).json({ errado: error });
  }
};

const getProduto = async (req, res) => {
  const id = req.params.id;
  console.log(id);
  try {
    const produto = await Produto.findById(id);
    return res.json(produto);
  } catch (error) {
    res.status(500).json({ errado: error });
  }
};

const patchProduto = async (req, res) => {
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
};

const postProduto = async (req, res) => {
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
};

module.exports = {
  deleteProduto,
  getBebidas,
  getImagens,
  getPratos,
  getSobremesas,
  getProdutos,
  getProduto,
  patchProduto,
  postProduto,
};
