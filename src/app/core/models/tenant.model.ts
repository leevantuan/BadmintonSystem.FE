import BaseResponseModel from './base.response.model';

export class TenantResponse {
  id: string;
  name: string;
  code: string;
  email: string;
  hotLine: string;
  city: string;
  address: string;
  slogan: string;
  description: string;
  image: string;
  connectionString: string;

  constructor(
    id: string,
    name: string,
    code: string,
    email: string,
    hotLine: string,
    city: string,
    address: string,
    slogan: string,
    description: string,
    image: string,
    connectionString: string
  ) {
    this.id = id;
    this.name = name;
    this.code = code;
    this.email = email;
    this.hotLine = hotLine;
    this.city = city;
    this.address = address;
    this.slogan = slogan;
    this.description = description;
    this.image = image;
    this.connectionString = connectionString;
  }
}

export class TenantModelResponse extends BaseResponseModel {
  override value: TenantModelResponse;

  constructor(data: any) {
    super(data);
    this.value = data.value;
  }
}
