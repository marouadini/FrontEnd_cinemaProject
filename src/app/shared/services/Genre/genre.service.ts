import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class GenreService {
  update(genre: any) {
    return this.http.put(this.url + '/genres', genre);

  }
  url = environment.url;
  constructor(private http: HttpClient) {}

  getAll(): Observable<any> {
    return this.http.get(this.url + '/genres');
  }
  add(genre): Observable<any> {
    return this.http.post(this.url + '/genres', genre);
  }
  getByid(idGenre:number): Observable<any> {
    return this.http.get(this.url + '/genres/' + idGenre);
  }

  delete(idGenre:number): Observable<any> {
    return this.http.delete<string>(this.url + '/genres/' + idGenre ,
    { responseType: 'text' as 'json'});
  }
}
