import BaseResponseModel from './base.response.model';

export class YardModel {
  id: string;
  name: string;
  imageLink: string | null;
  yardTypeId: string;
  isStatus: number;

  constructor(
    id: string = '',
    name: string = '',
    imageLink: string | null = null,
    yardTypeId: string = '',
    isStatus: number = 0
  ) {
    this.id = id;
    this.name = name;
    this.imageLink = imageLink;
    this.yardTypeId = yardTypeId;
    this.isStatus = isStatus;
  }
}

export class YardTypeModelResponse extends BaseResponseModel {
  override value: YardModel;
  constructor(data: any) {
    super(data);
    this.value = data.value;
  }
}
