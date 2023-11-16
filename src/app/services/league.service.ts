import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LeagueService {
  constructor(private _http: HttpClient) {}

  addLeague(data: any): Observable<string> {
    return this._http.post<string>('http://localhost:3000/api/leagues/', data);
  }

  updateLeague(id: number, data: any): Observable<string> {
    return this._http.put<string>(
      `http://localhost:3000/api/leagues/${id}`,
      data
    );
  }

  getLeagueList(): Observable<League[]> {
    return this._http.get<League[]>('http://localhost:3000/api/leagues/');
  }

  deleteLeague(id: number): Observable<any> {
    return this._http.delete<League[]>(
      `http://localhost:3000/api/leagues/${id}`
    );
  }
}

export interface League {
  id: number;
  name: string;
}
