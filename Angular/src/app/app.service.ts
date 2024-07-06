import { Injectable, Optional } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { user } from './user';
import { environment } from 'src/environments/environment.development';

@Injectable({providedIn: 'root'})

export class AppService {
  private apiServerUrl = environment.apiBaseUrl;
  constructor(private http: HttpClient) { }

  public getAllUsers(): Observable<user[]> {
    return this.http.get<user[]>(`${this.apiServerUrl}/user/all`);
  }

  public getUserById(UserId : number):Observable<Optional> {
    return this.http.get<user>(`${this.apiServerUrl}/user/search/${UserId}`);
  }

  public createEKyc(User : user): Observable<user> {
    return this.http.post<user>(`${this.apiServerUrl}/user/create`, User);
  } 

  public updateEKyc(User : user): Observable<user> {
    return this.http.put<user>(`${this.apiServerUrl}/user/update`, User);
  }

  public deleteEKyc(UserId : number): Observable<void> {
    return this.http.delete<void>(`${this.apiServerUrl}/user/delete/${UserId}`);
  }

}
