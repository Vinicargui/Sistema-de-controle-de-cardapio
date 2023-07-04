// const Usuario = require("../../models/usuario");
// //import { createPasswordHash } from "../servicos/autenticacao";
// const createPasswordHash = require("../../servicos/autenticacao");
// const bcrypt = require("bcryptjs");

// class UsuarioControle {
//   async index(req, res) {
//     try {
//       const usuarios = await Usuario.find();
//       return res.json(usuarios);
//     } catch (error) {
//       console.error(error);
//       return res.status(500).json({ error: "Error interno no servidor" });
//     }
//   }

//   async create(req, res) {
//     try {
//       const { email, password } = req.body;
//       const usuario = await Usuario.findOne({ email });

//       if (usuario) {
//         return res
//           .status(422)
//           .json({ message: `email: ${email} ja cadastrado` });
//       }

//       // const senhaCript = await createPasswordHash(password);

//       // const de = await bcrypt.hash(password, 8);
//       const newUsuario = await Usuario.create({
//         email,
//         password,
//       });
//       return res.status(201).json(newUsuario);
//     } catch (error) {
//       console.error(error);
//       return res.status(500).json({ error: "Error interno no servidor" });
//     }
//   }

//   async update(req, res) {
//     const id = req.params.id;
//     const { email, password } = req.body;

//     const usuario = {
//       email,
//       password,
//     };

//     try {
//       const usu = Usuario.findById(id);
//       if (!usu) {
//         return res.json("usuario nao encontrado");
//       }

//       await usu.updateOne(usuario);

//       //  await Usuario.updateOne({_id:id},usuario);
//       return res.json("alterado");
//     } catch (error) {
//       console.error(error);
//       return res.status(500).json({ error: "Error interno no servidor" });
//     }
//   }
// }

// module.exports = new UsuarioControle();
