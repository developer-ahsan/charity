import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GpsplaybackComponent } from './gpsplayback.component';

describe('GpsplaybackComponent', () => {
  let component: GpsplaybackComponent;
  let fixture: ComponentFixture<GpsplaybackComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GpsplaybackComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GpsplaybackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
