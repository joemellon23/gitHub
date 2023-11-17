import { Component, Inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormBuilder, FormGroup } from '@angular/forms';
import { ClubService } from '../../services/club.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { SharedService } from '../../services/shared.service';
import { ReactiveFormsModule } from '@angular/forms';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDialogModule } from '@angular/material/dialog';

//import {}

@Component({
  selector: 'app-clubs-add-edit',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatDialogModule,
  ],
  templateUrl: './clubs-add-edit.component.html',
  styleUrl: './clubs-add-edit.component.scss',
})
export class ClubsAddEditComponent {
  clubForm!: FormGroup;
  constructor(
    private fb: FormBuilder,
    private _clubService: ClubService,
    private _dialogRef: MatDialogRef<ClubsAddEditComponent>,
    private _sharedService: SharedService,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.clubForm = this.fb.group({
      clubname: '',
      add1: '',
      add2: '',
      add3: '',
      add4: '',
      postcode: '',
      website: '',
      contactname: '',
      contacttel: '',
      contactemail: '',
    });
  }

  ngOnInit(): void {
    this.clubForm.patchValue(this.data);
  }

  onFormSubmit() {
    if (this.clubForm.valid) {
      if (this.data) {
        this._clubService
          .updateClub(this.data.id, this.clubForm.value)
          .subscribe({
            next: (val: any) => {
              //alert('League updated successfully');
              this._sharedService.openSnackBar(
                'Club updated successfully!',
                'OK'
              );
              this._dialogRef.close(true);
            },
            error: (err: any) => {
              console.error(err);
            },
          });
      } else {
        this._clubService.addClub(this.clubForm.value).subscribe({
          next: (val: any) => {
            //alert('League added successfully');
            this._sharedService.openSnackBar('Club added successfully!', 'OK');
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
