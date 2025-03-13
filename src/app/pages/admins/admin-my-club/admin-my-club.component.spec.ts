import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminMyClubComponent } from './admin-my-club.component';

describe('AdminMyClubComponent', () => {
  let component: AdminMyClubComponent;
  let fixture: ComponentFixture<AdminMyClubComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminMyClubComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminMyClubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
