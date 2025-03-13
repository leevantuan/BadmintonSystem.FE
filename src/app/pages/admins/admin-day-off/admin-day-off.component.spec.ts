import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminDayOffComponent } from './admin-day-off.component';

describe('AdminDayOffComponent', () => {
  let component: AdminDayOffComponent;
  let fixture: ComponentFixture<AdminDayOffComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminDayOffComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminDayOffComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
