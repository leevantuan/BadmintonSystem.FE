import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DatePickerComponent } from '../../../shared/components/clients/date-picker/date-picker.component';
import { BookDetailComponent } from '../../../shared/components/clients/book-detail/book-detail.component';

interface TimeSlot {
  time: string;
  status: 'empty' | 'booked' | 'locked';
}

interface Field {
  name: string;
  slots: TimeSlot[];
}

@Component({
  selector: 'app-book',
  imports: [
    FormsModule,
    CommonModule,
    DatePickerComponent,
    BookDetailComponent,
  ],
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css'],
})
export class BookComponent {
  selectedDate: Date = new Date();
  onDateSelected(date: Date): void {
    this.selectedDate = date;
  }

  fields: Field[] = [
    { name: 'A', slots: this.generateSlots() },
    { name: 'B', slots: this.generateSlots() },
    { name: 'C', slots: this.generateSlots() },
    { name: 'D', slots: this.generateSlots() },
  ];

  selectedSlots: { field: string; time: string }[] = [];
  totalPrice: number = 0;
  pricePerSlot = 40000;
  showPopup = false;

  openPopup() {
    this.showPopup = true;
  }

  handlePopupChange(value: boolean) {
    this.showPopup = value;
  }

  generateSlots(): TimeSlot[] {
    const times = [
      '04:00 - 05:00',
      '05:05 - 06:05',
      '06:10 - 07:10',
      '07:15 - 08:15',
      '08:20 - 09:20',
      '14:00 - 15:00',
      '15:05 - 16:05',
      '16:10 - 17:10',
      '17:15 - 18:15',
      '18:20 - 19:20',
      '19:25 - 20:25',
      '20:30 - 21:30',
      '21:35 - 22:35',
    ];
    return times.map((time) => ({ time, status: 'empty' }));
  }

  getSlotClass(field: Field, slot: TimeSlot): string {
    if (slot.status === 'booked') return 'bg-red-500';
    if (slot.status === 'locked') return 'bg-gray-400';
    if (
      this.selectedSlots.some(
        (s) => s.field === field.name && s.time === slot.time
      )
    ) {
      return 'bg-yellow-300';
    }
    return 'bg-white';
  }

  toggleSlot(field: Field, slot: TimeSlot) {
    if (slot.status === 'booked' || slot.status === 'locked') return;

    const index = this.selectedSlots.findIndex(
      (s) => s.field === field.name && s.time === slot.time
    );
    if (index !== -1) {
      this.selectedSlots.splice(index, 1);
    } else {
      this.selectedSlots.push({ field: field.name, time: slot.time });
    }

    this.calculateTotal();
  }

  calculateTotal() {
    this.totalPrice = this.selectedSlots.length * this.pricePerSlot;
  }
}
