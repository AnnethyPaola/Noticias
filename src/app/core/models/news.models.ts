import { base } from "./base.models";

export interface news extends base {
    titulo : string,
    description : string,
    body : string,
    categoria: string,
    autor: string,
    fecha: string,
    image : string
}

export interface FileI {
    name: string;
    imageFile: File;
    size: string;
    type: string;
  }