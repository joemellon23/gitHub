import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayersAddEditComponent } from './players-add-edit.component';

describe('PlayersAddEditComponent', () => {
  let component: PlayersAddEditComponent;
  let fixture: ComponentFixture<PlayersAddEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlayersAddEditComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PlayersAddEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
