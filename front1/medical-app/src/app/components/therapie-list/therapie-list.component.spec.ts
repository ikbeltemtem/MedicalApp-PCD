import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TherapieListComponent } from './therapie-list.component';

describe('TherapieListComponent', () => {
  let component: TherapieListComponent;
  let fixture: ComponentFixture<TherapieListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TherapieListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TherapieListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
