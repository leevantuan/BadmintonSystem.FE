// date-picker.component.ts
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-date-picker',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './date-picker.component.html',
  styleUrl: './date-picker.component.css',
})
export class DatePickerComponent implements OnInit {
  // Add Output EventEmitter to emit the selected date to parent component
  @Output() dateSelected = new EventEmitter<Date>();

  dateControl = new FormControl('');
  showDatepicker = false;
  selectedDate: Date | null = null;

  // For calendar display
  currentMonth: Date = new Date();
  daysInMonth: Date[] = [];
  weekdays = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];

  constructor() {}

  closeDatepicker(): void {
    this.showDatepicker = false;
  }

  ngOnInit(): void {
    // Set today as the default selected date
    const today = new Date();
    this.selectedDate = today;
    this.dateControl.setValue(this.formatDate(today));

    // Emit the selected date to the parent component
    this.dateSelected.emit(today);

    this.generateCalendarDays();
  }

  toggleDatepicker(): void {
    this.showDatepicker = !this.showDatepicker;
    if (this.showDatepicker) {
      this.generateCalendarDays();
    }
  }

  generateCalendarDays(): void {
    this.daysInMonth = [];
    const year = this.currentMonth.getFullYear();
    const month = this.currentMonth.getMonth();

    // First day of the month
    const firstDay = new Date(year, month, 1);
    // Last day of the month
    const lastDay = new Date(year, month + 1, 0);

    // Add days from previous month to fill first week
    const daysFromPrevMonth = firstDay.getDay();
    for (let i = daysFromPrevMonth; i > 0; i--) {
      const prevMonthDay = new Date(year, month, 1 - i);
      this.daysInMonth.push(prevMonthDay);
    }

    // Add all days in current month
    for (let i = 1; i <= lastDay.getDate(); i++) {
      const day = new Date(year, month, i);
      this.daysInMonth.push(day);
    }

    // Add days from next month to complete the calendar
    const remainingDays = 42 - this.daysInMonth.length; // 6 rows of 7 days
    for (let i = 1; i <= remainingDays; i++) {
      const nextMonthDay = new Date(year, month + 1, i);
      this.daysInMonth.push(nextMonthDay);
    }
  }

  previousMonth(): void {
    this.currentMonth = new Date(
      this.currentMonth.getFullYear(),
      this.currentMonth.getMonth() - 1,
      1
    );
    this.generateCalendarDays();
  }

  nextMonth(): void {
    this.currentMonth = new Date(
      this.currentMonth.getFullYear(),
      this.currentMonth.getMonth() + 1,
      1
    );
    this.generateCalendarDays();
  }

  selectDate(date: Date): void {
    this.selectedDate = date;
    this.dateControl.setValue(this.formatDate(date));
    this.showDatepicker = false;

    // Emit the selected date to the parent component
    this.dateSelected.emit(date);
  }

  formatDate(date: Date): string {
    // Changed format to dd/mm/yyyy
    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  }

  isCurrentMonth(date: Date): boolean {
    return date.getMonth() === this.currentMonth.getMonth();
  }

  isToday(date: Date): boolean {
    const today = new Date();
    return (
      date.getDate() === today.getDate() &&
      date.getMonth() === today.getMonth() &&
      date.getFullYear() === today.getFullYear()
    );
  }

  isSelected(date: Date): boolean {
    if (!this.selectedDate) return false;
    return (
      date.getDate() === this.selectedDate.getDate() &&
      date.getMonth() === this.selectedDate.getMonth() &&
      date.getFullYear() === this.selectedDate.getFullYear()
    );
  }

  formatMonthYear(date: Date): string {
    return `${date.toLocaleString('default', {
      month: 'long',
    })} ${date.getFullYear()}`;
  }
}
