import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HausakteComponent } from './hausakte.component';

describe('HausakteComponent', () => {
  let component: HausakteComponent;
  let fixture: ComponentFixture<HausakteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HausakteComponent]
    });
    fixture = TestBed.createComponent(HausakteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
