import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Salle} from 'src/app/interfaces/salle';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class SalleService {

  private readonly api = environment.apiBaseUrl;
 

  constructor(private http:HttpClient) { }

  public getSalles():Observable<Salle[]>{
    return this.http.get<Salle[]>(`${this.api}/salles`);
  }
  
  public getSalleById(salleId: number):Observable<Salle>{
    return this.http.get<Salle>(`${this.api}/salles/${salleId}`);
  }
  
  public addSalle(salle: Salle): Observable<Salle> {
    return this.http.post<Salle>(`${this.api}/salles`,salle);
  }
  
  public updateSalle(salle: Salle):Observable<Salle>{
    return this.http.put<Salle>(`${this.api}/salles`, salle);
  }
  
  
  public deleteSalle(salleId: number): Observable<void> {
    return this.http.delete<void>(`${this.api}/salles/delete/${salleId}`);
  }






}