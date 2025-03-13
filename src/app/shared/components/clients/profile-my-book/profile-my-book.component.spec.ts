import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileMyBookComponent } from './profile-my-book.component';

describe('ProfileMyBookComponent', () => {
  let component: ProfileMyBookComponent;
  let fixture: ComponentFixture<ProfileMyBookComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProfileMyBookComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProfileMyBookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
