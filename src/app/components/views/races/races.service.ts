import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Pages, Races } from './races.model';

@Injectable({
  providedIn: 'root'
})
export class RacesService {

  baseUrl: String = environment.baseUrl;

  constructor(private http: HttpClient, private snack: MatSnackBar) { }

  findAll(): Observable<Pages> {
    const url = `${this.baseUrl}races`
    return this.http.get<Pages>(url);
  }

  findById(id: String): Observable<Races> {
    const url = `${this.baseUrl}races/${id}`;
    return this.http.get<Races>(url);
  }

  create(race: Races): Observable<Races>{
    const url = `${this.baseUrl}races`;
    return this.http.post<Races>(url, race);
  }

  delete(id: String): Observable<Races> {
    const url = `${this.baseUrl}races/${id}`;
    return this.http.delete<Races>(url);
  }

  update(race: Races): Observable<Races> {
    const url = `${this.baseUrl}races/${race.id}`;
    return this.http.put<Races>(url, race);
  }

  message(str: String): void {
    this.snack.open(`${str}`, 'OK', {
      horizontalPosition: 'end',
      verticalPosition: 'top',
      duration: 3000
    })
  }
}
