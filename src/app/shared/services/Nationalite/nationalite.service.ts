import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Nationalite } from '../../Models/Nationalite';

@Injectable({
  providedIn: 'root'
})
export class NationaliteService {

  constructor(private http: HttpClient) { }
  getAll():Observable<Nationalite[]>{
    return this.http.get<Nationalite[]>(`${environment.url}/nationalites`)
  }

  getById(id:number):Observable<Nationalite>{
    return this.http.get<Nationalite>(`${environment.url}/nationalites/`+id)
  }

  add(nationalite:Nationalite):Observable<Nationalite>{
    return this.http.post<Nationalite>(`${environment.url}/nationalites`, nationalite)
  }

  update(nationalite:Nationalite){
    return this.http.put(`${environment.url}/nationalites`, nationalite)
  }

  delete(id:number):Observable<string>{
    return this.http.delete<string>(`${environment.url}/nationalites/`+id, {responseType:"text" as "json"})
  }
}
