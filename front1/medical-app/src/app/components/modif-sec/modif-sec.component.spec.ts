import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifSecComponent } from './modif-sec.component';

describe('ModifSecComponent', () => {
  let component: ModifSecComponent;
  let fixture: ComponentFixture<ModifSecComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModifSecComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModifSecComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
