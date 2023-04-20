import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifTherapieComponent } from './modif-therapie.component';

describe('ModifTherapieComponent', () => {
  let component: ModifTherapieComponent;
  let fixture: ComponentFixture<ModifTherapieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModifTherapieComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModifTherapieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
