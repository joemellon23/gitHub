import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ClubService {
  constructor(private _http: HttpClient) {}

  addClub(data: any): Observable<string> {
    return this._http.post<string>('http://localhost:3000/api/clubs/', data);
  }

  updateClub(id: number, data: any): Observable<string> {
    return this._http.put<string>(
      `http://localhost:3000/api/clubs/${id}`,
      data
    );
  }

  getClubList(): Observable<Club[]> {
    return this._http.get<Club[]>(`http://localhost:3000/api/clubs/`);
  }

  getClubListBySeason(id: number): Observable<Club[]> {
    return this._http.get<Club[]>(
      `http://localhost:3000/api/clubs/season/${id}`
    );
  }

  deleteClub(id: number): Observable<any> {
    return this._http.delete<Club[]>(`http://localhost:3000/api/clubs/${id}`);
  }
}

export interface Club {
  id: number;
  clubname: string;
  add1: string;
  add2: string;
  add3: string;
  add4: string;
  postcode: string;
  website: string;
  contactname: string;
  contacttel: string;
  contactemail: string;
}
