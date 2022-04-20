import {Salle} from './salle';
import { Film } from './film';

export interface Seance{
    
    id: number;
    dateProjection: Date;
    heureDebut: any;
    heureFin: any;
    film: Film;
    salle: Salle;
 
}

