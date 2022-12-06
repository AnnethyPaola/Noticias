import { base } from "./base.models";

export interface news extends base {
    titulo : string,
    description : string,
    body : string,
    categoria: string,
    autor: string,
    fecha: Date,
    image : string
}