import { getTodosPosts } from "../models/postagensModel.js";

export async function listarPostagens(req, res) {
    const postagens = await getTodosPosts();
    res.status(200).json(postagens);
}

/*
export async function listarPostagensPorId(req, res) {
    const index = buscarPostPorId(req.params.id);
    res.status(200).json(postagens[index]);
}*/
