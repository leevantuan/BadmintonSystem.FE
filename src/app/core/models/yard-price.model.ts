import BaseResponseModel from './base.response.model';
import { YardModel } from './yard.model';

export class YardPriceModel {
  id: string;
  startTime: string;
  endTime: string;
  price: number;
  isToken: string | null;
  expirationTime: string | null;
  yardId: string;
  priceId: string;
  timeSlotId: string;
  effectiveDate: string;
  isBooking: number;

  constructor(
    id: string = '',
    startTime: string = '',
    endTime: string = '',
    price: number = 0,
    isToken: string | null = null,
    expirationTime: string | null = null,
    yardId: string = '',
    priceId: string = '',
    timeSlotId: string = '',
    effectiveDate: string = '',
    isBooking: number = 0
  ) {
    this.id = id;
    this.startTime = startTime;
    this.endTime = endTime;
    this.price = price;
    this.isToken = isToken;
    this.expirationTime = expirationTime;
    this.yardId = yardId;
    this.priceId = priceId;
    this.timeSlotId = timeSlotId;
    this.effectiveDate = effectiveDate;
    this.isBooking = isBooking;
  }
}

export class YardPriceByDateModel {
  yard: YardModel;
  yardPriceDetails: YardPriceModel[];

  constructor(
    yard: YardModel = new YardModel(),
    yardPriceDetails: YardPriceModel[] = []
  ) {
    this.yard = yard;
    this.yardPriceDetails = yardPriceDetails;
  }
}

export class YardPriceByDateModelResponse extends BaseResponseModel {
  override value: YardPriceByDateModel;

  constructor(data: any) {
    super(data);
    this.value = data.value;
  }
}
