import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http' 
import { Personas } from '../models/personas' 

@Injectable({
  providedIn: 'root'
})
export class PersonasService {

  url:string = 'http://localhost/apipersonas';

  constructor(private http:HttpClient) {}

  public getPersonas(){
    return this.http.get<Personas[]>(this.url)
  }
}
