import conectarAoBanco from "../config/dbConfig.js";
import { ObjectId } from "mongodb";

const conexao = await conectarAoBanco(process.env.STRING_CONEXAO);

export async function getTodosPosts() {
    const db = conexao.db("NetworkDB");
    const colecao = db.collection("postagens");
    return colecao.find().toArray();
}

export async function criarPostagem(novaPostagem) {
    const db = conexao.db("NetworkDB");
    const colecao = db.collection("postagens");
    return colecao.insertOne(novaPostagem);
}

export async function atualizarPostagem(id, novaPostagem) {
    const db = conexao.db("NetworkDB");
    const colecao = db.collection("postagens");
    const objId = ObjectId.createFromHexString(id);
    return colecao.updateOne({_id: new ObjectId(objId)}, {$set: novaPostagem});
}

/*

export async function buscarPostPorId(id){
    return postagens.findIndex((postagem) => {
        return postagem.id === Number(id);
    })
}

*/