import { Component, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { League, LeagueService } from '../../services/league.service';
import { LeagueAddEditComponent } from '../league-add-edit/league-add-edit.component';
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
  selector: 'app-leagues-home',
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
  templateUrl: './leagues-home.component.html',
  styleUrl: './leagues-home.component.scss',
})
export class LeaguesHomeComponent {
  displayedColumns: string[] = ['id', 'name', 'isactive', 'action'];

  dataSource = new MatTableDataSource<League>([]);

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(
    private _dialog: MatDialog,
    private _leagueService: LeagueService //private _sharedService: SharedService
  ) {}

  ngOnInit(): void {
    this.getLeagueList();
  }

  openAddEditLeagueForm() {
    const dialogRef = this._dialog.open(LeagueAddEditComponent);
    dialogRef.afterClosed().subscribe({
      next: (val) => {
        if (val) {
          this.getLeagueList();
        }
      },
    });
    //this.getLeagueList();
  }

  openEditLeagueForm(data: any) {
    const dialogRef = this._dialog.open(LeagueAddEditComponent, {
      data: data,
    });
    dialogRef.afterClosed().subscribe({
      next: (val) => {
        if (val) {
          this.getLeagueList();
        }
      },
    });
  }

  getLeagueList() {
    this._leagueService.getLeagueList().subscribe({
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

  deleteLeague(id: number) {
    this._leagueService.deleteLeague(id).subscribe({
      next: (res) => {
        //alert('League Deleted!')
        //this._sharedService.openSnackBar('League Deleted!','OK')
        this.getLeagueList();
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
