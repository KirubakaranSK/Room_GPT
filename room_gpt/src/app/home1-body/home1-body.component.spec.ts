import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Home1BodyComponent } from './home1-body.component';

describe('Home1BodyComponent', () => {
  let component: Home1BodyComponent;
  let fixture: ComponentFixture<Home1BodyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Home1BodyComponent]
    });
    fixture = TestBed.createComponent(Home1BodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
