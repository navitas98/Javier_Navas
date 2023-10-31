export type Persona = {
  nombre: string,
  apellido1:string,
  apellido2:string,
  nacimiento:string,
  correo:string,
  instragram:string,
  linkedin:string,
 // lenguajes:{lenguaje:string, control:number},
  idiomas:[string]
  cursos:[Cursos],
  id: string;
};
export type Cursos={
  nombre:string,
  centro:string,
  lugar:string,
  anoInicio:number,
  anoFin:number
}
