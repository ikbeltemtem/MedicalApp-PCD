import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MedPComponent } from './med-p.component';

describe('MedPComponent', () => {
  let component: MedPComponent;
  let fixture: ComponentFixture<MedPComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MedPComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MedPComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
