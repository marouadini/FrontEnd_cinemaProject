import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import {Seance} from 'src/app/interfaces/seance';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SeanceService {
   api = environment.url;
  

  constructor(private http:HttpClient) {
   }

   public getSeances(): Observable<Seance[]>{
    return this.http.get<Seance[]>(`${this.api}/seances`);
  }

public addSeance(seance: Seance): Observable<Seance> {
  return this.http.post<Seance>(`${this.api}/seances`,seance);
}

public deleteSeance(idSeance: number): Observable<any> {
  return this.http.delete<string>(this.api + '/seances/' + idSeance,
  { responseType: 'text' as 'json'}
  );
}

}