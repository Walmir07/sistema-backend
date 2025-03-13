import express from "express";
import routes from "./src/routes/postagensRoutes.js";

/*
import conectarAoBanco from "./src/config/dbConfig.js";
*/

/* Conexão com o banco | Model
const conexao = await conectarAoBanco(process.env.STRING_CONEXAO);
*/

const app = express();

//app.use(express.json());

routes(app);

app.listen(3000, () => {
    console.log("Servidor ouvindo na porta 3000");
});

/* Rota home | Routes
app.get("/", (req, res) => {
    res.status(200).send("Bem vindo ao servidor!");
});*/

/* Função que busca todos os posts | Model

async function getTodosPosts() {
    const db = conexao.db("NetworkDB");
    const colecao = db.collection("postagens");
    return colecao.find().toArray();
}
*/

/* Rota para buscar todos os posts | Routes

app.get("/postagens", async (req, res) => {
    const postagens = await getTodosPosts();
    res.status(200).json(postagens);
});
*/

/* Rota para buscar o post por id | Controllers
function buscarPostPorId(id){
    return postagens.findIndex((postagem) => {
        return postagem.id === Number(id);
    })
}*/

/* Rota de posta específico | Routes
app.get("/postagens/:id", (req, res) => {
    const index = buscarPostPorId(req.params.id);
    res.status(200).json(postagens[index]);
}); */