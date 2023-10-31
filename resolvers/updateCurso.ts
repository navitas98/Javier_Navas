import { Request, Response } from "npm:express@4.18.2";
import CursoModel from "../db/curso.ts";

const updatecurso = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { nombre, centro, lugar, anoInicio,anoFin} = req.body;
    if (!nombre || !centro ||!lugar ||!anoInicio||!anoFin) {
      res.status(400).send("Nombre, centro, lugar, ano Incio y fin de curso requeridos");
      return;
    }

    const curso = await CursoModel.findOneAndUpdate(
      {  _id:id },
      {nombre, centro, lugar, anoInicio,anoFin},
      { new: true }
    ).exec();

    if (!curso) {
      res.status(404).send("cursoa no encontrada");
      return;
    }

    res.status(200).send({
        nombre:curso.nombre,
        centro:curso.centro,
        lugar:curso.lugar,
        anoInicio:curso.anoInicio,
        anoFin:curso.anoFin,
        id: curso._id.toString()
    });
  } catch (error) {
    res.status(500).send(error.message);
    return;
  }
};

export default updatecurso;
