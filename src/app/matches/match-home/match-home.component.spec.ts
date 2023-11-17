import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatchHomeComponent } from './match-home.component';

describe('MatchHomeComponent', () => {
  let component: MatchHomeComponent;
  let fixture: ComponentFixture<MatchHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MatchHomeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MatchHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
