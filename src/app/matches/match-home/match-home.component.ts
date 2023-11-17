import { Component, OnInit, ViewChild } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { MatchService, Match } from '../../services/match.service';

import { MatchAddEditComponent } from '../match-add-edit/match-add-edit.component';
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
  selector: 'app-match-home',
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
  templateUrl: './match-home.component.html',
  styleUrl: './match-home.component.scss',
})
export class MatchHomeComponent {
  displayedColumns: string[] = [
    'id',
    'fixturedate',
    'playeddate',
    'fkhometeam',
    'fkawayteam',
    'isresult',
    'homeshots',
    'awayshots',
    'homepoints',
    'awaypoints',
    'homerinkswon',
    'awayrinkswon',
    'drawnrinks',
    'action',
  ];

  dataSource = new MatTableDataSource<Match>([]);

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(
    private _dialog: MatDialog,
    private _matchService: MatchService
  ) {}

  ngOnInit(): void {
    this.getMatchList();
  }

  openAddEditMatchForm() {
    const dialogRef = this._dialog.open(MatchAddEditComponent);
    dialogRef.afterClosed().subscribe({
      next: (val) => {
        if (val) {
          this.getMatchList();
        }
      },
    });
    //this.getPlayerList();
  }

  openEditMatchForm(data: any) {
    const dialogRef = this._dialog.open(MatchAddEditComponent, {
      data: data,
    });
    dialogRef.afterClosed().subscribe({
      next: (val) => {
        if (val) {
          this.getMatchList();
        }
      },
    });
  }

  getMatchList() {
    this._matchService.getMatchList().subscribe({
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

  deleteMatch(id: number) {
    this._matchService.deleteMatch(id).subscribe({
      next: (res) => {
        //alert('League Deleted!')
        //this._sharedService.openSnackBar('League Deleted!','OK')
        this.getMatchList();
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
  formatDate(inDate: string) {
    var datePipe = new DatePipe('en-US');
    //var datePipe!: new DatePipe();
    return datePipe.transform(inDate, 'dd/MM/yyyy hh:mm');
  }
}
