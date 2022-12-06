import { base } from "./base.models";

export interface user {
    id : string,
    nombre : string,
    rol: rol,
    password : string,
    correo : string,
    imagen: string,
    emailVerified: boolean;
}

export interface rol {
    admin : string,
    subscriber : string
}