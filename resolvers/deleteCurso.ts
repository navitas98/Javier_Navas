import { Request, Response } from "npm:express@4.18.2";
import CursoModel from "../db/curso.ts"
const deleteCurso = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const curso = await CursoModel.findOneAndDelete({ _id:id }).exec();
    if (!curso) {
      res.status(404).send("Curso no encontrada");
      return;
    }
    res.status(200).send("Curso borrado");
  } catch (error) {
    res.status(404).send(error.message);
    return;
  }
};

export default deleteCurso;
