import { Request, Response } from "npm:express@4.18.2";
import PersonaModel from "../db/person.ts";

const addPersona = async (req: Request, res: Response) => {
  try {
    const { nombre, apellido1,apellido2,nacimiento,correo,instagram,linkedin,idiomas,cursos } = req.body;
    if (!nombre || !apellido1||!correo ) {
      res.status(400).send("Los campos nombre, apellidos, fecha de nacimiento correo etc son obligatorios");
      return;
    }

    const alreadyExists = await PersonaModel.findOne({ nombre, apellido1, apellido2 }).exec();
    if (alreadyExists) {
      res.status(400).send("La persona ya existe");
      return;
    }

    const person = new PersonaModel({ nombre,apellido1, apellido2, nacimiento, correo, instagram, linkedin, idiomas, cursos });
    await person.save();

    res.status(200).send({
      nombre:person.nombre,
      apellido1:person.apellido1,
      apellido2:person.apellido2,
      nacimiento:person.nacimiento,
      correo:person.correo,
      instagram:person.instragram,
      likendin:person.linkedin,
      idiomas:person.idiomas,
      cursos:person.cursos,
      id: person._id.toString(),
    });
  } catch (error) {
    res.status(500).send(error.message);
    return;
  }
};

export default addPersona;
