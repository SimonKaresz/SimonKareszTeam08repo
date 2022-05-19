import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HelsinkiFeladatComponent } from './helsinki-feladat.component';

describe('HelsinkiFeladatComponent', () => {
  let component: HelsinkiFeladatComponent;
  let fixture: ComponentFixture<HelsinkiFeladatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HelsinkiFeladatComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HelsinkiFeladatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
