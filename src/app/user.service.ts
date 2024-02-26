import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class UserService {
  constructor(private http: HttpClient) {}

  //Http Client get method
  public getUsers(): Observable<any> {
    const url = 'https://eventsData';
    return this.http.get<any>(url);
  }

}
