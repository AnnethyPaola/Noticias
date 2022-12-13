import { base } from "./base.models";
import { news } from "./news.models";
import { user } from "./user.models";

export interface comentarios extends base {
    idUser: user;
    idNoticia: string,
    TituloComentario: string,
    BodyComentario:string,
}