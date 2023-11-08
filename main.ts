import express from "npm:express@4.18.2";
import mongoose from "npm:mongoose@7.6.3";

import updatePerson from "./resolvers/updatePerson.ts";
import deletePerson from "./resolvers/deletePersona.ts";
import cors from "cors"

import { load } from "https://deno.land/std@0.204.0/dotenv/mod.ts";
import addPersona from "./resolvers/addPersona.ts";
import getPerson from "./resolvers/getPerson.ts";
import addCurso from "./resolvers/addCurso.ts";
import getCurso from "./resolvers/getCurso.ts";
import updateCurso from "./resolvers/updateCurso.ts";
import deleteCurso from "./resolvers/deleteCurso.ts";
const env = await load();
const MONGO_URL = "mongodb+srv://javier:javier@nebrija.awzbgfs.mongodb.net/?retryWrites=true&w=majority";
if (!MONGO_URL) {
  console.log("No mongo URL found");
  Deno.exit(1);
}
await mongoose.connect(MONGO_URL);
const app = express();
app.use(cors())
app.use(express.json());
app
//Persona
  .get("/getPerson/:id",getPerson )
  .put("/updatePerson/:id", updatePerson)
  .post("/addPerson", addPersona)
  .delete("/deletePerson/:dni", deletePerson)
//Curso
  .post("/addCurso",addCurso)
  .get("/getCurso/:id",getCurso)
  .put("/updateCurso/:id",updateCurso)
  //delete curso no funciona
  .delete("/deleteCurso/:id",deleteCurso)
app.listen(3000, () => {
  console.log("Server listening on port 3000");
});
