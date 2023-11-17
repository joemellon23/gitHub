import { Component, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlayerService, Player } from '../../services/player.service';

import { PlayersAddEditComponent } from '../players-add-edit/players-add-edit.component';
import { ReactiveFormsModule } from '@angular/forms';

import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatDialog } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-players-home',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatInputModule,
    MatTableModule,
    MatPaginatorModule,
    MatFormFieldModule,
    MatButtonModule,
    MatIconModule,
  ],
  templateUrl: './players-home.component.html',
  styleUrl: './players-home.component.scss',
})
export class PlayersHomeComponent {
  displayedColumns: string[] = [
    'id',
    'firstname',
    'lastname',
    'fkteam',
    'action',
  ];

  dataSource = new MatTableDataSource<Player>([]);

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(
    private _dialog: MatDialog,
    private _playerService: PlayerService //private _sharedService: SharedService
  ) {}

  ngOnInit(): void {
    this.getPlayerList();
  }

  openAddEditLeagueForm() {
    const dialogRef = this._dialog.open(PlayersAddEditComponent);
    dialogRef.afterClosed().subscribe({
      next: (val) => {
        if (val) {
          this.getPlayerList();
        }
      },
    });
    //this.getPlayerList();
  }

  openEditPlayerForm(data: any) {
    const dialogRef = this._dialog.open(PlayersAddEditComponent, {
      data: data,
    });
    dialogRef.afterClosed().subscribe({
      next: (val) => {
        if (val) {
          this.getPlayerList();
        }
      },
    });
  }

  getPlayerList() {
    this._playerService.getPlayerList().subscribe({
      next: (res) => {
        //console.log(res);
        this.dataSource = new MatTableDataSource(res);
        //console.log(this.dataSource.data)
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  deletePlayer(id: number) {
    this._playerService.deletePlayer(id).subscribe({
      next: (res) => {
        //alert('League Deleted!')
        //this._sharedService.openSnackBar('League Deleted!','OK')
        this.getPlayerList();
      },
      error: console.log,
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}
