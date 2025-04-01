import BaseResponseModel from './base.response.model';
import { YardModel } from './yard.model';

export class YardPriceModel {
  startTime: string;
  endTime: string;
  price: number;
  yardId: string;
  priceId: string;
  timeSlotId: string;
  effectiveDate: string;
  isBooking: number;
  id: string;
  isToken: string | null;
  expirationTime: string | null;

  constructor(
    startTime: string,
    endTime: string,
    price: number,
    yardId: string,
    priceId: string,
    timeSlotId: string,
    effectiveDate: string,
    isBooking: number,
    id: string,
    isToken: string | null,
    expirationTime: string | null
  ) {
    this.startTime = startTime;
    this.endTime = endTime;
    this.price = price;
    this.yardId = yardId;
    this.priceId = priceId;
    this.timeSlotId = timeSlotId;
    this.effectiveDate = effectiveDate;
    this.isBooking = isBooking;
    this.id = id;
    this.isToken = isToken;
    this.expirationTime = expirationTime;
  }
}

export class YardPriceByDateModel {
  yard: YardModel;
  yardPricesDetails: YardPriceModel[];

  constructor(yard: YardModel, yardPricesDetails: YardPriceModel[]) {
    this.yard = yard;
    this.yardPricesDetails = yardPricesDetails;
  }
}

export class YardPriceByDateModelResponse extends BaseResponseModel {
  override value: YardPriceByDateModel[];

  constructor(data: any) {
    super(data);
    this.value = data.value;
  }
}
