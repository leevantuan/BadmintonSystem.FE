import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-profile-my-book',
  imports: [CommonModule, FormsModule],
  templateUrl: './profile-my-book.component.html',
  styleUrl: './profile-my-book.component.css',
})
export class ProfileMyBookComponent {
  selectedDate: string = '';
  selectedTab: string = 'all';
  currentPage: number = 1;
  pageSize: number = 3;

  orders = [
    {
      id: 'ABC-6457325',
      status: 'successful',
      date: '10 May 2021',
      description:
        'Blue & pink Silk Saree | Linen Kurta | Printed black & white short kurti & 2 more items',
      price: 12500,
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNXyhMS8dNJTOnVRHAmnWXUlkG9pjyZeutUQ&s',
    },
    {
      id: 'ABC-6457325',
      status: 'cancelled',
      date: '10 May 2021',
      description: 'Two-seater wooden polished dining table',
      price: 8999,
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNXyhMS8dNJTOnVRHAmnWXUlkG9pjyZeutUQ&s',
    },
    {
      id: 'ABC-6457326',
      status: 'successful',
      date: '11 May 2021',
      description: 'Modern wooden coffee table',
      price: 5000,
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNXyhMS8dNJTOnVRHAmnWXUlkG9pjyZeutUQ&s',
    },
    {
      id: 'ABC-6457327',
      status: 'successful',
      date: '12 May 2021',
      description: 'Leather office chair',
      price: 7500,
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNXyhMS8dNJTOnVRHAmnWXUlkG9pjyZeutUQ&s',
    },
  ];

  get filteredOrders() {
    if (this.selectedTab === 'all') return this.orders;
    return this.orders.filter((order) => order.status === this.selectedTab);
  }

  get paginatedOrders() {
    const startIndex = (this.currentPage - 1) * this.pageSize;
    return this.filteredOrders.slice(startIndex, startIndex + this.pageSize);
  }

  get totalPages() {
    return Math.ceil(this.filteredOrders.length / this.pageSize);
  }

  setTab(tab: string) {
    this.selectedTab = tab;
    this.currentPage = 1;
  }

  nextPage() {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
    }
  }

  prevPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
    }
  }
}
