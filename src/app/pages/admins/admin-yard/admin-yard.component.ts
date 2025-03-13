import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

interface Transaction {
  name: string;
  date: string;
  price: string;
  category: string;
  status: string;
}

@Component({
  selector: 'app-admin-yard',
  imports: [CommonModule, FormsModule],
  templateUrl: './admin-yard.component.html',
  styleUrl: './admin-yard.component.css',
})
export class AdminYardComponent {
  transactions: Transaction[] = [
    {
      name: 'Bought PYPL',
      date: 'Nov 23, 01:00 PM',
      price: '$2,567.88',
      category: 'Finance',
      status: 'Success',
    },
    {
      name: 'Bought AAPL',
      date: 'Nov 22, 09:00 PM',
      price: '$2,567.88',
      category: 'Technology',
      status: 'Pending',
    },
    {
      name: 'Sell KKST',
      date: 'Oct 12, 03:54 PM',
      price: '$6,754.99',
      category: 'Finance',
      status: 'Success',
    },
    {
      name: 'Bought FB',
      date: 'Sep 09, 02:00 AM',
      price: '$1,445.41',
      category: 'Social media',
      status: 'Success',
    },
    {
      name: 'Sell AMZNaaaaaaaaaaaaaaaaa',
      date: 'Feb 35, 08:00 PM',
      price: '$5,698.55',
      category: 'E-commerce',
      status: 'Failed',
    },
    {
      name: 'Bought FB',
      date: 'Sep 09, 02:00 AM',
      price: '$1,445.41',
      category: 'Social media',
      status: 'Success',
    },
    {
      name: 'Bought FB',
      date: 'Sep 09, 02:00 AM',
      price: '$1,445.41',
      category: 'Social media',
      status: 'Success',
    },
    {
      name: 'Bought FB',
      date: 'Sep 09, 02:00 AM',
      price: '$1,445.41',
      category: 'Social media',
      status: 'Success',
    },
    // Add more transactions as needed
  ];

  currentPage = 1;
  itemsPerPage = 7;
  searchTerm: string = '';

  get filteredTransactions() {
    return this.transactions.filter((transaction) =>
      transaction.name.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }

  get totalPages() {
    return Math.ceil(this.filteredTransactions.length / this.itemsPerPage);
  }

  get paginatedTransactions() {
    const start = (this.currentPage - 1) * this.itemsPerPage;
    return this.filteredTransactions.slice(start, start + this.itemsPerPage);
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
  selectedTransaction: any = null;

  togglePopup(transaction: any) {
    if (this.selectedTransaction === transaction) {
      this.selectedTransaction = null; // Đóng popup nếu nhấn lại
    } else {
      this.selectedTransaction = transaction; // Mở popup
    }
  }

  editTransaction(transaction: any) {
    console.log('Edit transaction:', transaction);
    this.selectedTransaction = null; // Đóng popup sau khi chọn
  }

  deleteTransaction(transaction: any) {
    console.log('Delete transaction:', transaction);
    this.selectedTransaction = null; // Đóng popup sau khi chọn
  }

  createTransaction() {}
}
