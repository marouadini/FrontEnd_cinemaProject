import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { Film } from 'src/app/interfaces/film';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FilmService {
  // allows two applications to talk to each other
  api = environment.url;
  constructor( private http : HttpClient) { }

  public getFilms(): Observable<any[]>{
    return this.http.get<any[]>(this.api+'/films');
  }
   
  public getFilmPage(cp,limit):  Observable<any[]>{
    return this.http.get<any[]>(this.api+'/films/pg?offset='+cp+'&limit='+limit);
  }

  public getFilmById(filmId : number): Observable<void>{
    return this.http.get<void>(this.api+'/films/${filmId}');
  }
  
  public addFilm(film): Observable<any>{
    return this.http.post(this.api+'/films/dto',film);
  }
  public updateFilm(film : Film): Observable<Film>{
    return this.http.put<Film>(this.api+'films',film);
  }
  public deleteFilm(filmId : number): Observable<void>{
    return this.http.delete<void>(this.api+'films/${filmId}');
  }
}
