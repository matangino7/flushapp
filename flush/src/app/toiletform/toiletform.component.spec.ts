import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToiletformComponent } from './toiletform.component';

describe('ToiletformComponent', () => {
  let component: ToiletformComponent;
  let fixture: ComponentFixture<ToiletformComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ToiletformComponent]
    });
    fixture = TestBed.createComponent(ToiletformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
