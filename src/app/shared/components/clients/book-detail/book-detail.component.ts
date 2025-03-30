import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-book-detail',
  imports: [CommonModule, FormsModule],
  templateUrl: './book-detail.component.html',
  styleUrl: './book-detail.component.css',
})
export class BookDetailComponent {
  @Input() showPopup: boolean = true;
  @Output() showPopupChange = new EventEmitter<boolean>();

  bookingInfo = {
    clubName: 'Badminton Chill Clubs',
    address: '123 Đường Cầu Lông, TP.Biên Hoà, Đồng Nai',
    date: '12/03/2025',
    slots: [
      { time: '12h30 - 13h00', price: 20000 },
      { time: '14h00 - 14h30', price: 20000 },
      { time: '13h00 - 13h30', price: 20000 },
    ],
    target: 'Học sinh - sinh viên',
    totalHours: '1h30',
    totalPrice: 60000,
  };

  user = {
    name: '',
    phone: '',
  };

  closePopup() {
    this.isClosing = true;
  }

  confirmBooking() {
    alert('Xác nhận đặt lịch thành công!');
  }
  isClosing = false;
  onAnimationEnd() {
    if (this.isClosing) {
      this.showPopup = false;
      this.showPopupChange.emit(this.showPopup);
      this.isClosing = false;
    }
  }

  public UIResource = {
    bookingInfo: 'Thông tin đặt lịch',
    yardName: 'Tên sân',
    address: 'Địa chỉ',
    date: 'Ngày',
    people: 'Đối tượng',
    totalTime: 'Tổng giờ',
    totalPrice: 'Tổng tiền',
    myName: 'TÊN CỦA BẠN',
    phoneNumber: 'SỐ ĐIỆN THOẠI',
    confirm: 'XÁC NHẬN & THANH TOÁN',
  };
}
