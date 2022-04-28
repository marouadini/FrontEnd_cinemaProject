import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Salle} from 'src/app/interfaces/salle';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class SalleService {

  api = environment.url;
 

  constructor(private http:HttpClient) { }

  public getSalles():Observable<Salle[]>{
    return this.http.get<Salle[]>(`${this.api}/salles`);
  }
  
  public addSalle(salle: Salle): Observable<Salle> {
    return this.http.post<Salle>(`${this.api}/salles`,salle);
  }
  
  public deleteSalle(idSalle: number): Observable<any> {
    return this.http.delete<string>(this.api + '/salles/' + idSalle,
    { responseType: 'text' as 'json'}
    );
  }

 
  }

