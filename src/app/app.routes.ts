import { Routes } from '@angular/router';

import { HomeComponent } from './layout/home/home.component';
import { LeaguesHomeComponent } from './leagues/leagues-home/leagues-home.component';
import { ClubsHomeComponent } from './clubs/clubs-home/clubs-home.component';
import { PlayersHomeComponent } from './players/players-home/players-home.component';
import { MatchHomeComponent } from './matches/match-home/match-home.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'leagues', component: LeaguesHomeComponent },
  { path: 'clubs', component: ClubsHomeComponent },
  { path: 'players', component: PlayersHomeComponent },
  { path: 'matches', component: MatchHomeComponent },
];
