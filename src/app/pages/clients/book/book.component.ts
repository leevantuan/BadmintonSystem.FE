import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DatePickerComponent } from '../../../shared/components/clients/date-picker/date-picker.component';
import { BookDetailComponent } from '../../../shared/components/clients/book-detail/book-detail.component';
import { BookService } from './book.service';
import { TimeSlotResponse } from '../../../core/models/time-slot.model';
import {
  YardPriceByDateModel,
  YardPriceByDateModelResponse,
  YardPriceModel,
} from '../../../core/models/yard-price.model';
import BaseResponseModel from '../../../core/models/base.response.model';
import { DateFormatPipe } from '../../../shared/pipes/date-format.pipe';
import { BookInfoModel } from '../../../core/models/book-info.model';

@Component({
  selector: 'app-book',
  imports: [
    FormsModule,
    CommonModule,
    DatePickerComponent,
    BookDetailComponent,
    DateFormatPipe,
  ],
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css'],
})
export class BookComponent implements OnInit {
  selectedDate: Date = new Date();
  totalPrice: number = 0;
  showPopup = false;
  timeSlots: TimeSlotResponse[] = [];
  yardPries: YardPriceByDateModel[] = [];
  selectedYardPrice: YardPriceModel[] = [];
  totalTime: number = 0;
  bookingInfo: BookInfoModel = {
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

  constructor(private bookService: BookService) {}

  ngOnInit(): void {
    this.bookService.getTimeSlots().subscribe((res: BaseResponseModel) => {
      if (res.isSuccess) {
        this.timeSlots = res.value.items as TimeSlotResponse[];
        this.timeSlots.sort((a, b) => a.startTime.localeCompare(b.startTime));
      } else {
        console.error(res.error);
      }
    });
    this.getYardPriceByDate(this.selectedDate);
  }

  getYardPriceByDate(date: Date) {
    // date.setHours(date.getHours() + 8);
    let formattedDate = date.toISOString();
    this.bookService
      .getYardPrices(`"${formattedDate}"`)
      .subscribe((res: YardPriceByDateModelResponse) => {
        if (res.isSuccess) {
          this.yardPries = res.value;
        } else {
          console.error(res.error);
        }
      });
  }

  onDateSelected(date: Date): void {
    this.selectedDate = date;
    this.getYardPriceByDate(date);
    this.resetForm();
  }

  openPopup() {
    this.showPopup = true;

    this.bookingInfo = {
      clubName: 'Badminton Chill Club',
      address: '123 Đường Cầu Lông, TP.Biên Hoà, Đồng Nai',
      date: this.selectedDate,
      target: 'Student',
      totalHours: this.totalTime,
      totalPrice: this.totalPrice,
      slots: this.bookService.selectedYardPrice,
    };
  }

  handlePopupChange(value: boolean) {
    this.showPopup = value;
  }

  statusSlot(slot: YardPriceModel): string {
    if (slot.isBooking === 1) return 'bg-red-500 cursor-not-allowed';
    if (this.bookService.selectedYardPrice.some((s) => s.id === slot.id)) {
      return 'bg-yellow-300  cursor-pointer';
    }
    var isAvailable = this.isAvailable(slot);
    if (!isAvailable) return 'bg-gray-300 cursor-not-allowed';
    return 'bg-white  cursor-pointer';
  }

  isAvailable(slot: YardPriceModel) {
    let time = slot.startTime;
    let currentTime = new Date();
    const [startHour, startMinute, startSecond] = time.split(':').map(Number);
    const startTime = this.selectedDate;
    startTime.setHours(startHour, startMinute, startSecond, 0);
    return startTime > currentTime;
  }

  selectedSlot(slot: YardPriceModel) {
    if (slot.isBooking === 1) return;
    if (!this.isAvailable(slot)) return;
    const index = this.bookService.selectedYardPrice.findIndex(
      (s) => s.id === slot.id
    );
    if (index !== -1) {
      this.bookService.removeSelectedYardPrice(slot);
      this.totalTime -= 1;
    } else {
      this.bookService.addSelectedYardPrice(slot);
      this.totalTime += 1;
    }
    this.totalPrice = this.bookService.totalPrice;
    this.selectedYardPrice = this.bookService.selectedYardPrice;
  }

  resetForm() {
    this.bookService.clearSelectedYardPrice();
    this.selectedYardPrice = this.bookService.selectedYardPrice;
    this.totalPrice = 0;
    this.totalTime = 0;
  }
}
