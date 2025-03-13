import { getTodosPosts, criarPostagem } from "../models/postagensModel.js";
import fs from "fs"

export async function listarPostagens(req, res) {
    const postagens = await getTodosPosts();
    res.status(200).json(postagens);
}

export async function criarNovoPost(req, res) {
    const novaPostagem = req.body;
    try {
        const postagemCriada = await criarPostagem(novaPostagem);
        res.status(200).json(postagemCriada);
    } catch(erro) {
        console.error(erro.message);
        res.status(500).json({"Erro":"Falha na requisição"});
    }
}

export async function uploadImagem(req, res) {
    const novaPostagem = {
        descricao: "",
        imgUrl: req.file.originalname,
        alt: ""
    };

    try {
        const postagemCriada = await criarPostagem(novaPostagem);
        const imagemAtualizada = `uploads/${postagemCriada.insertedId}.png`;
        fs.renameSync(req.file.path, imagemAtualizada);
        res.status(200).json(postagemCriada);
    } catch(erro) {
        console.error(erro.message);
        res.status(500).json({"Erro":"Falha na requisição"});
    }
    
}

/*
export async function listarPostagensPorId(req, res) {
    const index = buscarPostPorId(req.params.id);
    res.status(200).json(postagens[index]);
}*/
