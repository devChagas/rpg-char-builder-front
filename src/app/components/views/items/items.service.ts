import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Items, Pages } from './items.model';

@Injectable({
  providedIn: 'root'
})
export class ItemsService {

  baseUrl: String = environment.baseUrl;

  constructor(private http: HttpClient, private snack: MatSnackBar) { }

  findAll(): Observable<Pages> {
    const url = `${this.baseUrl}items`
    return this.http.get<Pages>(url);
  }

  create(item: Items): Observable<Items>{
    const url = `${this.baseUrl}items`;
    return this.http.post<Items>(url, item);
  }


  message(str: String): void {
    this.snack.open(`${str}`, 'OK', {
      horizontalPosition: 'end',
      verticalPosition: 'top',
      duration: 3000
    })
  }

}
