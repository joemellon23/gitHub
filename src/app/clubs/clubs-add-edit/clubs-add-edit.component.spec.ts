import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClubsAddEditComponent } from './clubs-add-edit.component';

describe('ClubsAddEditComponent', () => {
  let component: ClubsAddEditComponent;
  let fixture: ComponentFixture<ClubsAddEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClubsAddEditComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ClubsAddEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
