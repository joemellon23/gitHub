import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatchAddEditComponent } from './match-add-edit.component';

describe('MatchAddEditComponent', () => {
  let component: MatchAddEditComponent;
  let fixture: ComponentFixture<MatchAddEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MatchAddEditComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MatchAddEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
