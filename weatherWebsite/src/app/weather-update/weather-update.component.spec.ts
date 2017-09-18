import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherUpdateComponent } from './weather-update.component';

describe('WeatherUpdateComponent', () => {
  let component: WeatherUpdateComponent;
  let fixture: ComponentFixture<WeatherUpdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WeatherUpdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeatherUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
