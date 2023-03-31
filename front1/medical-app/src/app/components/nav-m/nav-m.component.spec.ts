import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavMComponent } from './nav-m.component';

describe('NavMComponent', () => {
  let component: NavMComponent;
  let fixture: ComponentFixture<NavMComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavMComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavMComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
