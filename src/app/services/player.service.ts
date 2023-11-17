import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PlayerService {
  constructor(private _http: HttpClient) {}

  addPlayer(data: any): Observable<string> {
    return this._http.post<string>('http://localhost:3000/api/players/', data);
  }

  updatePlayer(id: number, data: any): Observable<string> {
    return this._http.put<string>(
      `http://localhost:3000/api/players/${id}`,
      data
    );
  }

  getPlayerList(): Observable<Player[]> {
    return this._http.get<Player[]>('http://localhost:3000/api/players/');
  }

  deletePlayer(id: number): Observable<any> {
    return this._http.delete<Player[]>(
      `http://localhost:3000/api/players/${id}`
    );
  }
}

export interface Player {
  id: number;
  firstname: string;
  lastname: string;
  fkTeam: number;
}
// "id":1,"firstname":"Joe","lastname":"Mellon","fkteam":1}
