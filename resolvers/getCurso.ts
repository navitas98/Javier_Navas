import { Request, Response } from "npm:express@4.18.2";
import cursoModel from "../db/curso.ts"
const getCurso = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const curso = await cursoModel.findOne({ _id:id }).exec();
    if (!curso) {
      res.status(404).send("curso no encontrado");
      return;
    }
    res.status(200).send({
        nombre:curso.nombre,
        centro:curso.centro,
        lugar:curso.lugar,
        anoIncio:curso.anoIncio,
        anoFin:curso.anoFin,
        id: curso._id.toString(),
     
    });
  } catch (error) {
    res.status(404).send(error.message);
    return;
  }
};

export default getCurso;