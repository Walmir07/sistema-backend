import express from "express";

const app = express();

app.listen(3000, () => {
    console.log("Servidor ouvindo na porta 3000");
})

app.get("/", (req, res) => {
    res.status(200).send("Bem vindo ao servidor!");
})

app.get("/api", (req, res) => {
    res.status(200).send("Exemplo de rota api");
})