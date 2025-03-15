import express from "express";
import multer from "multer";
import { listarPostagens, criarNovoPost, uploadImagem, atualizarNovaPostagem } from "../controllers/postagensController.js";
import cors from "cors";

const corsOptions = {
  origin: "http://localhost:8000", // URL do front-end - Teste
  optionsSuccessStatus: 200
}

// Configuração do armazenamento do Multer para uploads de imagens:
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'uploads/');
    },
    filename: function (req, file, cb) {
      cb(null, file.originalname);
    }
});
  
const upload = multer({ storage: storage });

const routes = (app) => {

    app.use(express.json());

    app.use(cors(corsOptions));

    app.get("/", (req, res) => {
        res.status(200).send("Bem vindo ao servidor!");
    });

    app.get("/postagens", listarPostagens);

    app.post("/postagens", criarNovoPost);

    app.post("/upload", upload.single("imagem"), uploadImagem);

    app.put("/upload/:id", atualizarNovaPostagem);

    //app.get("/postagens/:id", listarPostagensPorId);

}

export default routes;