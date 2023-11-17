import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MatchService {
  constructor(private _http: HttpClient) {}

  addMatch(data: any): Observable<string> {
    return this._http.post<string>('http://localhost:3000/api/matches/', data);
  }

  updateMatch(id: number, data: any): Observable<string> {
    return this._http.put<string>(
      `http://localhost:3000/api/matches/${id}`,
      data
    );
  }

  getMatchList(): Observable<Match[]> {
    return this._http.get<Match[]>('http://localhost:3000/api/matches/');
  }

  deleteMatch(id: number): Observable<any> {
    return this._http.delete<Match[]>(
      `http://localhost:3000/api/matches/${id}`
    );
  }
}

export interface Match {
  id: number;
  fixturedate: string;
  playeddate: string;
  fkhometeam: number;
  fkawayteam: number;
  isresult: boolean;
  homeshots: number;
  awayshots: number;
  homepoints: number;
  awaypoints: number;
  homerinkswon: number;
  awayrinkswon: number;
  drawnrinks: number;
}
