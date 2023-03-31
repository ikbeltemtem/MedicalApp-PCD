import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavMPComponent } from './nav-mp.component';

describe('NavMPComponent', () => {
  let component: NavMPComponent;
  let fixture: ComponentFixture<NavMPComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavMPComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavMPComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
