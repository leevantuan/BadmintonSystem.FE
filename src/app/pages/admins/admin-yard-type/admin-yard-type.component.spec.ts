import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminYardTypeComponent } from './admin-yard-type.component';

describe('AdminYardTypeComponent', () => {
  let component: AdminYardTypeComponent;
  let fixture: ComponentFixture<AdminYardTypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminYardTypeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminYardTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
