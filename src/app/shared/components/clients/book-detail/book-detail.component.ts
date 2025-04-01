import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BookInfoModel } from '../../../../core/models/book-info.model';

@Component({
  selector: 'app-book-detail',
  imports: [CommonModule, FormsModule],
  templateUrl: './book-detail.component.html',
  styleUrl: './book-detail.component.css',
})
export class BookDetailComponent {
  @Input() showPopup: boolean = true;
  @Input() bookingInfo: BookInfoModel = {
    clubName: 'Badminton Chill Clubs',
    address: '123 Đường Cầu Lông, TP.Biên Hoà, Đồng Nai',
    date: new Date(),
    slots: [
      {
        startTime: '05:40:00',
        endTime: '06:40:00',
        price: 60000,
        isToken: null,
        expirationTime: null,
        yardId: '5a3b85ee-cb4b-43cb-ab7b-c5d449f5dd7c',
        priceId: 'f9d92bc8-86a0-49da-84d2-8effa622e500',
        timeSlotId: '70bb6ad3-5a72-41e5-bb71-16e2eb2abdde',
        effectiveDate: '2025-03-27T00:00:00Z',
        isBooking: 0,
        id: '0525e2cf-f406-40b5-9529-67fdbbe26fa3',
      },
    ],
    target: 'Học sinh - sinh viên',
    totalHours: 3,
    totalPrice: 60000,
  };
  @Output() showPopupChange = new EventEmitter<boolean>();

  formattedDate = this.bookingInfo.date.toLocaleDateString('vi-VN', {
    weekday: 'long',
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
  });

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
