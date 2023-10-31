import { Request, Response } from "npm:express@4.18.2";
import personaModel from "../db/person.ts"
const getPerson = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const personaje = await personaModel.findOne({ _id:id }).exec();
    if (!personaje) {
      res.status(404).send("persona no encontrado");
      return;
    }
    res.status(200).send({
      nombre:personaje.nombre,
      apellido1:personaje.apellido1,
      apellido2:personaje.apellido2,
      nacimiento:personaje.nacimiento,
      correo:personaje.correo,
      instagram:personaje.instragram,
      likendin:personaje.linkedin,
      idiomas:personaje.idiomas,
      cursos:personaje.cursos,
      id: personaje._id.toString(),
     
    });
  } catch (error) {
    res.status(404).send(error.message);
    return;
  }
};

export default getPerson;