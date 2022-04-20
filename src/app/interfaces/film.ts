import { Genre } from "../shared/Models/Genre";
import { Nationalite } from "../shared/Models/Nationalite";
import { Realisateur } from "./Realisateur";

export interface Film {
    id : number;
    titre : string;
    duree : number;
    annee : number;
    photo : string;
    genre : Genre;
    nationalite : Nationalite;
    realisateur : Realisateur;

}
