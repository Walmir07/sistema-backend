import conectarAoBanco from "../config/dbConfig.js";

const conexao = await conectarAoBanco(process.env.STRING_CONEXAO);

export async function getTodosPosts() {
    const db = conexao.db("NetworkDB");
    const colecao = db.collection("postagens");
    return colecao.find().toArray();
}

/*

export async function buscarPostPorId(id){
    return postagens.findIndex((postagem) => {
        return postagem.id === Number(id);
    })
}

*/