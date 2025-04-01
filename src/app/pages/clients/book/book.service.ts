import { EventEmitter, Injectable } from '@angular/core';
import { ApiClientService } from '../../../core/services/api-client/api-client.service';
import { TimeSlotModelResponse } from '../../../core/models/time-slot.model';
import {
  YardPriceByDateModelResponse,
  YardPriceModel,
} from '../../../core/models/yard-price.model';

@Injectable({
  providedIn: 'root',
})
export class BookService {
  selectedYardPrice: YardPriceModel[] = [];
  totalPrice: number = 0;
  selectedYardPriceChangeEmitter = new EventEmitter();

  constructor(private apiClient: ApiClientService) {}

  getTimeSlots() {
    var pageIndex = 1;
    var pageSize = 99;
    var url = `time-slots/filter-and-sort?PageIndex=${pageIndex}&PageSize=${pageSize}`;
    return this.apiClient.get<TimeSlotModelResponse>(url);
  }

  getYardPrices(date: string) {
    var url = `yard-prices/filter-by-date`;
    return this.apiClient.post<YardPriceByDateModelResponse>(url, date);
  }

  // Handler selected slot
  addSelectedYardPrice(slot: YardPriceModel) {
    this.selectedYardPrice.push(slot);
    this.selectedYardPriceChangeEmitter.emit();
    this.calculatorPrice(slot.price);
  }

  removeSelectedYardPrice(slot: YardPriceModel) {
    this.selectedYardPrice = this.selectedYardPrice.filter(
      (y) => y.id != slot.id
    );
    this.selectedYardPriceChangeEmitter.emit();
    this.calculatorPrice(-slot.price);
  }

  clearSelectedYardPrice() {
    this.selectedYardPrice = [];
    this.selectedYardPriceChangeEmitter.emit();
    this.totalPrice = 0;
  }

  // Calculator selected
  calculatorPrice(price: number) {
    this.totalPrice += price;
  }
}
