import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjoutTherapieComponent } from './ajout-therapie.component';

describe('AjoutTherapieComponent', () => {
  let component: AjoutTherapieComponent;
  let fixture: ComponentFixture<AjoutTherapieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjoutTherapieComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AjoutTherapieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
