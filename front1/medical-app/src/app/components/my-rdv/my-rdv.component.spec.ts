import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyRdvComponent } from './my-rdv.component';

describe('MyRdvComponent', () => {
  let component: MyRdvComponent;
  let fixture: ComponentFixture<MyRdvComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyRdvComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyRdvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
