import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Jobs, Pages } from './jobs.model';

@Injectable({
  providedIn: 'root'
})
export class JobsService {

  baseUrl: String = environment.baseUrl;

  constructor(private http: HttpClient) { }

  findAll(): Observable<Pages> {
    const url = `${this.baseUrl}jobs`
    return this.http.get<Pages>(url);
  }
}
