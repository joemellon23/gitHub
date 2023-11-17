import { Component, Inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup } from '@angular/forms';
import { LeagueService } from '../../services/league.service';

import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';

@Component({
  selector: 'app-league-add-edit',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatButtonModule,
    MatDialogModule,
    MatInputModule,
    MatCheckboxModule,
  ],
  templateUrl: './league-add-edit.component.html',
  styleUrl: './league-add-edit.component.scss',
})
export class LeagueAddEditComponent implements OnInit {
  leagueForm: FormGroup;

  constructor(
    private _fb: FormBuilder,
    private _leagueService: LeagueService,
    private _dialogRef: MatDialogRef<LeagueAddEditComponent>,
    //private _sharedService: SharedService,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.leagueForm = this._fb.group({
      name: '',
      isactive: '',
    });
  }

  ngOnInit(): void {
    this.leagueForm.patchValue(this.data);
  }

  onFormSubmit() {
    if (this.leagueForm.valid) {
      if (this.data) {
        this._leagueService
          .updateLeague(this.data.id, this.leagueForm.value)

          .subscribe({
            next: (val: any) => {
              //alert('League updated successfully');
              //this._sharedService.openSnackBar('League updated successfully!','OK');
              this._dialogRef.close(true);
            },
            error: (err: any) => {
              console.error(err);
            },
          });
      } else {
        this._leagueService.addLeague(this.leagueForm.value).subscribe({
          next: (val: any) => {
            //alert('League added successfully');
            //this._sharedService.openSnackBar('League added successfully!','OK');
            this._dialogRef.close(true);
          },
          error: (err: any) => {
            console.error(err);
          },
        });
      }
    }
  }
}
