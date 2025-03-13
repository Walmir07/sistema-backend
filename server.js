import express from "express";
import routes from "./src/routes/postagensRoutes.js";

const app = express();

routes(app);

app.listen(3000, () => {
    console.log("Servidor ouvindo na porta 3000");
});
