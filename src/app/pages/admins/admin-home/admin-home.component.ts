import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

interface Court {
  name: string;
  status: 'available' | 'playing' | 'booked';
  pricePerHour: number;
  items: { name: string; quantity: number; price: number }[];
}

@Component({
  selector: 'app-admin-home',
  imports: [CommonModule, FormsModule],
  templateUrl: './admin-home.component.html',
  styleUrl: './admin-home.component.css',
})
export class AdminHomeComponent {
  selectedStatus: string = 'all';
  startTime: string = '18:00';
  endTime: string = '19:00';
  selectedCourt: Court | null = null;

  courts: Court[] = [
    { name: 'Sân 01', status: 'available', pricePerHour: 180000, items: [] },
    {
      name: 'Sân 02',
      status: 'playing',
      pricePerHour: 180000,
      items: [
        { name: 'Revive chanh muối', quantity: 2, price: 15000 },
        { name: 'Revive', quantity: 1, price: 15000 },
        { name: 'Nước suối', quantity: 1, price: 10000 },
        { name: 'Bò húc', quantity: 1, price: 40000 },
      ],
    },
    { name: 'Sân 03', status: 'booked', pricePerHour: 180000, items: [] },
    { name: 'Sân 04', status: 'available', pricePerHour: 180000, items: [] },
    { name: 'Sân 05', status: 'playing', pricePerHour: 180000, items: [] },
    { name: 'Sân 06', status: 'booked', pricePerHour: 180000, items: [] },
    { name: 'Sân 07', status: 'available', pricePerHour: 180000, items: [] },
    { name: 'Sân 08', status: 'playing', pricePerHour: 180000, items: [] },
  ];

  get filteredCourts(): Court[] {
    if (this.selectedStatus === 'all') return this.courts;
    return this.courts.filter((court) => court.status === this.selectedStatus);
  }

  selectCourt(court: Court) {
    this.selectedCourt = court;
  }

  get totalHours(): string {
    const start = parseInt(this.startTime.split(':')[0]);
    const end = parseInt(this.endTime.split(':')[0]);
    return `${end - start}:00:00`;
  }

  get totalCourtCost(): number {
    return this.selectedCourt ? this.selectedCourt.pricePerHour : 0;
  }

  get totalAmount(): number {
    if (!this.selectedCourt) return 0;
    return (
      this.totalCourtCost +
      this.selectedCourt.items.reduce(
        (sum, item) => sum + item.price * item.quantity,
        0
      )
    );
  }

  get discount(): number {
    return this.totalAmount * 0.2;
  }

  get promoDiscount(): number {
    return 20000;
  }

  get finalAmount(): number {
    return this.totalAmount - this.discount - this.promoDiscount;
  }

  selectedTime = '04:00 - 05:00';

  times = [
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

  filterCourts() {
    console.log('Lọc sân theo khung giờ:', this.selectedTime);
    // Logic lọc sân dựa trên selectedTime
  }

  increaseQuantity(item: any) {
    item.quantity++;
  }

  decreaseQuantity(item: any) {
    if (item.quantity > 1) {
      item.quantity--;
    }
  }

  showInvoice = false;

  openInvoice() {
    this.showInvoice = true;
  }

  closeInvoice() {
    this.showInvoice = false;
  }

  exportInvoice() {
    alert('Hóa đơn đã được xuất!');
    this.showInvoice = false;
  }
  // filterCourts() {
  //   // Đây là nơi để lọc theo thời gian nếu cần
  // }
}
