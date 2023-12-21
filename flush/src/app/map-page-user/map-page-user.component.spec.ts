import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MapPageUserComponent } from './map-page-user.component';

describe('MapPageUserComponent', () => {
  let component: MapPageUserComponent;
  let fixture: ComponentFixture<MapPageUserComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MapPageUserComponent]
    });
    fixture = TestBed.createComponent(MapPageUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
