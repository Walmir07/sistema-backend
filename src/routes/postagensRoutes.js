import express from "express";
import { listarPostagens } from "../controllers/postagensController.js";

const routes = (app) => {

    app.use(express.json());

    app.get("/", (req, res) => {
        res.status(200).send("Bem vindo ao servidor!");
    });

    app.get("/postagens", listarPostagens);

    //app.get("/postagens/:id", listarPostagensPorId);

}

export default routes;