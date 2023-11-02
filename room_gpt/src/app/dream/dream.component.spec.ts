import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DreamComponent } from './dream.component';

describe('DreamComponent', () => {
  let component: DreamComponent;
  let fixture: ComponentFixture<DreamComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DreamComponent]
    });
    fixture = TestBed.createComponent(DreamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
