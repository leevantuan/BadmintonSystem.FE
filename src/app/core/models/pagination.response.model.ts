export default class PaginationResponseModel {
  pageIndex: number;
  pageSize: number;
  totalCount: number;
  hasNextPage: boolean;
  hasPreviousPage: boolean;
  items: any;

  constructor(data: any) {
    this.pageIndex = data.pageIndex;
    this.pageSize = data.pageSize;
    this.totalCount = data.totalCount;
    this.hasNextPage = data.hasNextPage;
    this.hasPreviousPage = data.hasPreviousPage;
    this.items = data.items;
  }
}
