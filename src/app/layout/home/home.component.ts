import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit {
  /* saveSeason(id: number) {
        if (id == 1) {
      localStorage.setItem('seasonId', '1');
      localStorage.setItem('seasonName', '2022');
      localStorage.setItem('leagueId', '1');
      localStorage.setItem('leagueName', 'Coalville Over 60s');
    }
    else if (id == 2) {
      localStorage.setItem('seasonId', '2');
      localStorage.setItem('seasonName', '2023');
      localStorage.setItem('leagueId', '1');
      localStorage.setItem('leagueName', 'Coalville Over 60s');
    } 
  }*/

  ngOnInit(): void {}
}
