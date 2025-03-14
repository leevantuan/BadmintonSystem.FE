import { Component } from '@angular/core';
import Transaction from '../../../core/models/transaction.demo';
import { AdminTableComponent } from '../../../shared/components/admins/admin-table/admin-table.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-admin-category',
  imports: [AdminTableComponent, FormsModule],
  templateUrl: './admin-category.component.html',
  styleUrl: './admin-category.component.css',
})
export class AdminCategoryComponent {
  tableHeaders: string[] = ['Name', 'Date', 'Price', 'Category', 'Status'];

  transactions: Transaction[] = [
    {
      name: 'Bought PYPL',
      date: 'Nov 23, 01:00 PM',
      price: '$2,567.88',
      category: 'Finance',
      status: '1',
    },
    {
      name: 'Bought AAPL',
      date: 'Nov 22, 09:00 PM',
      price: '$2,567.88',
      category: 'Technology',
      status: '0',
    },
    {
      name: 'Sell KKST',
      date: 'Oct 12, 03:54 PM',
      price: '$6,754.99',
      category: 'Finance',
      status: '1',
    },
    {
      name: 'Bought FB',
      date: 'Sep 09, 02:00 AM',
      price: '$1,445.41',
      category: 'Social media',
      status: '0',
    },
    {
      name: 'Sell AMZNaaaaaaaaaaaaaaaaa',
      date: 'Feb 35, 08:00 PM',
      price: '$5,698.55',
      category: 'E-commerce',
      status: '1',
    },
    {
      name: 'Bought FB',
      date: 'Sep 09, 02:00 AM',
      price: '$1,445.41',
      category: 'Social media',
      status: '1',
    },
    {
      name: 'Bought FB',
      date: 'Sep 09, 02:00 AM',
      price: '$1,445.41',
      category: 'Social media',
      status: '1',
    },
    {
      name: 'Bought FB',
      date: 'Sep 09, 02:00 AM',
      price: '$1,445.41',
      category: 'Social media',
      status: '0',
    },
    // Add more transactions as needed
  ];

  searchTerm: string = '';

  createTransaction() {}
}
