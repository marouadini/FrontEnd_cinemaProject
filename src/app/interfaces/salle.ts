import {Seance} from './seance';
export interface Salle{

    idSalle:number;
    capacite: number;
    seance: Seance[];
    addedDate: Date;
}