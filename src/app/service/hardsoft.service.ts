import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Hardsoft } from '../model/hardsoft';

@Injectable({
  providedIn: 'root'
})
export class HardsoftService {
  //Local
  //URL = 'http://localhost:8080/skill/';
  //Remoto
  //URL = 'https://chelodevback.herokuapp.com/skill/';
  URL = 'https://backendchelodev.onrender.com/skill/';

  constructor(private httpClient: HttpClient) { }

  public lista(): Observable<Hardsoft[]> {
    return this.httpClient.get<Hardsoft[]>(this.URL + 'lista');
  }

  public detail(id: number): Observable<Hardsoft> {
    return this.httpClient.get<Hardsoft>(this.URL + `detail/${id}`);
  }

  public save(hardsoft: Hardsoft): Observable<any> {
    return this.httpClient.post<any>(this.URL + 'create', hardsoft);
  }

  public update(id: number, hardsoft: Hardsoft): Observable<any> {
    return this.httpClient.put<any>(this.URL + `update/${id}`, hardsoft);
  }

  public delete(id: number): Observable<any> {
    return this.httpClient.delete<any>(this.URL + `delete/${id}`);
  }
}
