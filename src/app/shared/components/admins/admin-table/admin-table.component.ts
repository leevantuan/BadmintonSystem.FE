import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-admin-table',
  imports: [CommonModule, FormsModule],
  templateUrl: './admin-table.component.html',
  styleUrl: './admin-table.component.css',
})
export class AdminTableComponent {
  @Input() headers: string[] = [];
  @Input() data: any[] = [];
  @Input() itemsPerPage = 6;

  currentPage = 1;
  // itemsPerPage = 6;

  get totalPages() {
    return Math.ceil(this.data.length / this.itemsPerPage);
  }

  get paginatedData() {
    const start = (this.currentPage - 1) * this.itemsPerPage;
    return this.data.slice(start, start + this.itemsPerPage);
  }

  nextPage() {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
    }
  }

  previousPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
    }
  }

  // popup
  selectedItem: any = null;

  togglePopup(item: any) {
    if (this.selectedItem === item) {
      this.selectedItem = null; // Đóng popup nếu nhấn lại
    } else {
      this.selectedItem = item; // Mở popup
    }
  }
  editItem(item: any) {
    console.log('Edit', item);
    this.selectedItem = null;
  }

  deleteItem(item: any) {
    console.log('Delete', item);
    this.selectedItem = null;
  }
}
