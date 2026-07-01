import { Router } from "express";
import personagensController from "./controllers/personagem";

const routes = Router();


routes.get("/", (request, response) =>
    response.status(200).json({ success: true })
);


// Rotas de alunos
 routes.get("/", (request, response) =>
  response.status(200).json({ success: true }),
);

routes.get("/personagens",  personagensController.list); 
routes.post("/personagens", personagensController.create); 
routes.put("/personagens/:id",  personagensController.update); 
routes.delete("/personagens/:id",  personagensController.delete); 

export default routes;