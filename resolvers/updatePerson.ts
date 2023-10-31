import { Request, Response } from "npm:express@4.18.2";
import PersonModel from "../db/person.ts";

const updatePerson = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { nombre, apellido1,apellido2,nacimiento,correo,instagram,linkedin,idiomas,cursos } = req.body;
    if (!nombre || !apellido1) {
      res.status(400).send("Name and apellido are required");
      return;
    }

    const updatedPerson = await PersonModel.findOneAndUpdate(
      {  _id:id },
      {nombre, apellido1,apellido2,nacimiento,correo,instagram,linkedin,idiomas,cursos },
      { new: true }
    ).exec();

    if (!updatedPerson) {
      res.status(404).send("Person not found");
      return;
    }

    res.status(200).send({
      nombre:updatedPerson.nombre,
      apellido1:updatedPerson.apellido1,
      apellido2:updatedPerson.apellido2,
      nacimiento:updatedPerson.nacimiento,
      correo:updatedPerson.correo,
      instagram:updatedPerson.instragram,
      likendin:updatedPerson.linkedin,
      idiomas:updatedPerson.idiomas,
      cursos:updatedPerson.cursos,
      id: updatedPerson._id.toString(),
    });
  } catch (error) {
    res.status(500).send(error.message);
    return;
  }
};

export default updatePerson;
