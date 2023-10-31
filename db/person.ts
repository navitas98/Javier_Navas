import mongoose from "npm:mongoose@7.6.3";
import { Persona } from "../types.ts";

const Schema = mongoose.Schema;

const personaSchema = new Schema(
  {
    nombre:{type:String, requiered:true},
    apellido1:{type:String, requiered:true},
    apellido2:{type:String, requiered:true},
    nacimiento:{type:String,requiered:true},
    correo:{type:String, requiered:true},
    instagram:{type:String,requiered:true},
    linkedin:{type:String,requiered:true},
    idiomas:{type:[String], requiered:true},
    cursos:{type:String,requiered:true},
    //meter el lenguaje
  },
  { timestamps: false }
);

export type PersonaModelType = mongoose.Document & Omit<Persona, "id">;

export default mongoose.model<PersonaModelType>("Persona", personaSchema);
