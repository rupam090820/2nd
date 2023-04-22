import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SwarajComponent } from './swaraj.component';

describe('SwarajComponent', () => {
  let component: SwarajComponent;
  let fixture: ComponentFixture<SwarajComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SwarajComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SwarajComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
