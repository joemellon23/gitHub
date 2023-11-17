import { Injectable, OnInit } from '@angular/core';
import { MatSnackBar, MatSnackBarRef } from '@angular/material/snack-bar';
import { HttpClientModule } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class SharedService implements OnInit {
  updateSelectedSeasonData(
    _seasonId: number,
    _seasonName: string,
    _leagueId: number,
    _leagueName: string
  ) {
    /*     this.globalLeagueName = _leagueName ;
        this.globalSeasonName = _seasonName ;
        this.globalLeagueId = _leagueId ;
        this. globalSeasonId = _seasonId ; */
  }

  ngOnInit(): void {
    //The below sets a session varioble that can be ready by
    // console.log(localStorage.getItem('season'));
    localStorage.setItem('season', '2');
    console.log(localStorage.getItem('season'));
  }

  constructor(private _snackBar: MatSnackBar) {}

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 3000,
      verticalPosition: 'top',
    });
  }

  openLocalStorage() {
    return localStorage.getItem('season');
  }
}

export let globalVariables: Object = {
  leagueName: 'Coalville Over 60s',
  seasonName: '2003',
  leagueId: 1,
  seasonId: 2,
};
