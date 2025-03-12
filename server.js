import express from "express";

const postagens = [
    {
        id: 1,
        descricao: "Imagem de gatinho",
        imagem: "https://placecats.com/millie/300/150"
    },
    {
        id:2,
        descricao: "Gatinho dormindo em uma cesta",
        imagem: "https://placecats.com/millie/300/150"
    },
    {
        id: 3,
        descricao: "Gatinho brincando com um novelo de lã",
        imagem: "https://placecats.com/millie/300/150"
    },
    {
        id: 4,
        descricao: "Gatinho filhote com olhos azuis",
        imagem: "https://placecats.com/millie/300/150"
    },
    {
        id: 5,
        descricao: "Gatinho preto e branco",
        imagem: "https://placecats.com/millie/300/150"
    }
];

const app = express();

app.use(express.json());

app.listen(3000, () => {
    console.log("Servidor ouvindo na porta 3000");
});

app.get("/", (req, res) => {
    res.status(200).send("Bem vindo ao servidor!");
});

app.get("/postagens", (req, res) => {
    res.status(200).json(postagens);
});

function buscarPostPorId(id){
    return postagens.findIndex((postagem) => {
        return postagem.id === Number(id);
    })
}

app.get("/postagens/:id", (req, res) => {
    const index = buscarPostPorId(req.params.id);
    res.status(200).json(postagens[index]);
});