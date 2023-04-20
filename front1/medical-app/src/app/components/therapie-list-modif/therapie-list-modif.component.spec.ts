import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TherapieListModifComponent } from './therapie-list-modif.component';

describe('TherapieListModifComponent', () => {
  let component: TherapieListModifComponent;
  let fixture: ComponentFixture<TherapieListModifComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TherapieListModifComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TherapieListModifComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
