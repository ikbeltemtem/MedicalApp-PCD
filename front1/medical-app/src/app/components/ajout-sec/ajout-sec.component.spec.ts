import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjoutSecComponent } from './ajout-sec.component';

describe('AjoutSecComponent', () => {
  let component: AjoutSecComponent;
  let fixture: ComponentFixture<AjoutSecComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjoutSecComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AjoutSecComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
