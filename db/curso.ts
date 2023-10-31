import mongoose from "npm:mongoose@7.6.3";
import { Cursos } from "../types.ts";

const Schema = mongoose.Schema;

const cursoSchema = new Schema(
  {
    nombre:{type:String, requiered:true},
    centro:{type:String,requiered:true},
    lugar:{type:String, requiered:true},
    anoInicio:{type:Number,requiered:true},
    anoFin:{type:Number,requiered:true}
  },
  { timestamps: false }
);

export type CursoModelType = mongoose.Document & Omit<Cursos, "id">;

export default mongoose.model<CursoModelType>("Curso", cursoSchema);
