import { Request, Response } from "npm:express@4.18.2";
import CursoModel from "../db/curso.ts";

const addCurso = async (req: Request, res: Response) => {
  try {
    const { nombre, centro, lugar, anoInicio,anoFin } = req.body;
    if (!nombre || !centro||!lugar||!anoInicio ) {
      res.status(400).send("Los campos ...  son obligatorios");
      return;
    }

    const alreadyExists = await CursoModel.findOne({ nombre }).exec();
    if (alreadyExists) {
      res.status(400).send("El centro ya existe");
      return;
    }

    const curso = new CursoModel({ nombre,centro,lugar, anoInicio,anoFin });
    await curso.save();

    res.status(200).send({
      nombre:curso.nombre,
      centro:curso.centro,
      lugar:curso.lugar,
      anoInicio:curso.anoInicio,
      anoFin:curso.anoFin,
      id: curso._id.toString(),
    });
  } catch (error) {
    res.status(500).send(error.message);
    return;
  }
};

export default addCurso;
