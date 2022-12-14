import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Jobs, Pages } from './jobs.model';

@Injectable({
  providedIn: 'root'
})
export class JobsService {

  baseUrl: String = environment.baseUrl;

  constructor(private http: HttpClient, private snack: MatSnackBar) { }

  findAll(): Observable<Pages> {
    const url = `${this.baseUrl}jobs`
    return this.http.get<Pages>(url);
  }

  findById(id: String): Observable<Jobs> {
    const url = `${this.baseUrl}jobs/${id}`;
    return this.http.get<Jobs>(url);
  }

  create(job: Jobs): Observable<Jobs>{
    const url = `${this.baseUrl}jobs`;
    return this.http.post<Jobs>(url, job);
  }

  delete(id: String): Observable<Jobs> {
    const url = `${this.baseUrl}jobs/${id}`;
    return this.http.delete<Jobs>(url);
  }

  update(job: Jobs): Observable<Jobs> {
    const url = `${this.baseUrl}jobs/${job.id}`;
    return this.http.put<Jobs>(url, job);
  }

  message(str: String): void {
    this.snack.open(`${str}`, 'OK', {
      horizontalPosition: 'end',
      verticalPosition: 'top',
      duration: 3000
    })
  }
}
