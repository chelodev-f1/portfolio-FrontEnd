import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { persona } from '../model/persona.model';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {
  //Local
  //URL = 'http://localhost:8080/personas/';
  //Remoto
  //URL = 'https://chelodevback.herokuapp.com/personas/';
  URL = 'https://backendchelodev.onrender.com/personas/';

  constructor(private http: HttpClient) { }

  public getPersona(): Observable<persona> {
    return this.http.get<persona>(this.URL + 'traer/perfil');
  }
}
