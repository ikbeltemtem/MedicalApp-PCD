import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifMedsComponent } from './modif-meds.component';

describe('ModifMedsComponent', () => {
  let component: ModifMedsComponent;
  let fixture: ComponentFixture<ModifMedsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModifMedsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModifMedsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
