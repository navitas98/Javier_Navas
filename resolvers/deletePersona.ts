import { Request, Response } from "npm:express@4.18.2";
import PersonaModel from "../db/person.ts"
const deletePerson = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const person = await PersonaModel.findOneAndDelete({ _id:id }).exec();
    if (!person) {
      res.status(404).send("Persona no encontrada");
      return;
    }
    res.status(200).send("Persona borrada");
  } catch (error) {
    res.status(404).send(error.message);
    return;
  }
};

export default deletePerson;
