import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MedSComponent } from './med-s.component';

describe('MedSComponent', () => {
  let component: MedSComponent;
  let fixture: ComponentFixture<MedSComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MedSComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MedSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
