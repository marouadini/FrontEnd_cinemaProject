import {Salle} from './salle';
export interface Seance{
    
    idSeance: number;
    dateProjection: Date;
    heureDebut: any;
    heureFin: any;
    film: any;
    salle: Salle;
 
}

