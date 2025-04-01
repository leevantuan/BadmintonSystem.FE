import { YardPriceModel } from './yard-price.model';

export class BookInfoModel {
  clubName: string;
  address: string;
  date: Date;
  target: string;
  totalHours: number;
  totalPrice: number;
  slots: YardPriceModel[];

  constructor(
    clubName: string,
    address: string,
    date: Date,
    slots: YardPriceModel[],
    target: string,
    totalHours: number,
    totalPrice: number
  ) {
    this.clubName = clubName;
    this.address = address;
    this.date = date;
    this.slots = slots;
    this.target = target;
    this.totalHours = totalHours;
    this.totalPrice = totalPrice;
  }
}
