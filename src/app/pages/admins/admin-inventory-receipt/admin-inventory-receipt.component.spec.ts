import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminInventoryReceiptComponent } from './admin-inventory-receipt.component';

describe('AdminInventoryReceiptComponent', () => {
  let component: AdminInventoryReceiptComponent;
  let fixture: ComponentFixture<AdminInventoryReceiptComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminInventoryReceiptComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminInventoryReceiptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
