import { Component, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClubsAddEditComponent } from '../clubs-add-edit/clubs-add-edit.component';
import { Club, ClubService } from '../../services/club.service';

import { SharedService } from '../../services/shared.service';
//import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { MatToolbarModule } from '@angular/material/toolbar';

import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatDialog } from '@angular/material/dialog';

import { MatInputModule } from '@angular/material/input';

import { MatSort } from '@angular/material/sort';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-clubs-home',
  standalone: true,
  imports: [
    CommonModule,
    // HttpClientModule,
    ReactiveFormsModule,

    MatToolbarModule,
    MatTableModule,
    MatPaginatorModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
  ],
  templateUrl: './clubs-home.component.html',
  styleUrl: './clubs-home.component.scss',
})
export class ClubsHomeComponent {
  displayedColumns: string[] = [
    'id',
    'action',
    'clubname',
    'add1',
    'add2',
    'add3',
    'add4',
    'postcode',
    'web',
    'contactname',
    'contacttel',
    'contactemail',
  ];

  dataSource = new MatTableDataSource<Club>([]);

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  //the below is set on the home-comonent page to declare which season
  readonly _seasonId: number = parseInt(localStorage.getItem('seasonId')!);

  constructor(
    private _dialog: MatDialog,
    private _clubService: ClubService,
    private _sharedService: SharedService
  ) {}

  ngOnInit(): void {
    console.log('Fuckers');
    //const seasonIdString: string = '';
    //var seasonIdString = ;
    this.getClubList();
    //this.getClubListBySeason(this._seasonId);
  }

  openAddEditClubForm() {
    this._dialog.open(ClubsAddEditComponent);
    this.getClubList();
  }

  openEditClubForm(data: any) {
    const dialogRef = this._dialog.open(ClubsAddEditComponent, {
      data: data,
    });
    dialogRef.afterClosed().subscribe({
      next: (val) => {
        if (val) {
          this.getClubList();
        }
      },
    });
  }

  getClubList() {
    this._clubService.getClubList().subscribe({
      next: (res) => {
        this.dataSource = new MatTableDataSource(res);

        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  getClubListBySeason(id: number) {
    this._clubService.getClubListBySeason(id).subscribe({
      next: (res) => {
        console.log(this._seasonId);

        this.dataSource = new MatTableDataSource(res);

        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  deleteClub(id: number) {
    this._clubService.deleteClub(id).subscribe({
      next: (res) => {
        this._sharedService.openSnackBar('Club Deleted!', 'OK');
        this.getClubList();
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
