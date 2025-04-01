import BaseResponseModel from './base.response.model';

export class TimeSlotResponse {
  id: string;
  startTime: string;
  endTime: string;

  constructor(id: string, startTime: string, endTime: string) {
    this.id = id;
    this.startTime = startTime;
    this.endTime = endTime;
  }
}

export class TimeSlotModelResponse extends BaseResponseModel {
  override value: TimeSlotResponse;

  constructor(data: any) {
    super(data);
    this.value = data.value;
  }
}
