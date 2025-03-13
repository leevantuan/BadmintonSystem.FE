import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopStoriesComponent } from './shop-stories.component';

describe('ShopStoriesComponent', () => {
  let component: ShopStoriesComponent;
  let fixture: ComponentFixture<ShopStoriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShopStoriesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShopStoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
