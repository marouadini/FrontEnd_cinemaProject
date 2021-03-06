import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PersonneService {

  url= environment.url;
  constructor(private  http :HttpClient) { }

  getAll():Observable<any>{
    return this.http.get(this.url+ "/personnes")
  }

  add(personne):Observable<any>{
    return this.http.post(this.url+ "/personnes", personne)
  }
}
