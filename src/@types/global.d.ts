declare interface IRes<T = any> {
  data: T; // response data
  status: number; // code for errorType
  message: string; // message display to user
}

declare interface PaginationProp {
  current: number;
  pageNum: number;
  pageSize: number;
}
declare interface IListReq<T = any> extends PaginationProp {
  queryBean?: T;
  [key: string]: any;
}

// 分页接口入参
declare interface IReqPage<T = any> {
  pageSize: number;
  pageNum: number;
  queryBean: T | {};
}

declare interface PageBean<T> {
  endRow: number; //
  hasNextPage: boolean; //
  hasPreviousPage: boolean; //
  isFirstPage: boolean; //
  isLastPage: boolean; //
  list: Array<T>; //
  navigateFirstPage: number; //
  navigateLastPage: number; //
  navigatePages: number; //
  navigatepageNums: Array<number>; //
  nextPage: number; //
  pageNum: number; //
  pageSize: number; //
  pages: number; //
  prePage: number; //
  size: number; //
  startRow: number; //
  total: number; //
}

declare interface IResPageBean<T> {
  data: PageBean<T>; // response data
  status: number; // code for errorType
  message: string;
}

declare type PageType = 'add' | 'edit' | 'view';
