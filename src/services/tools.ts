interface Page {
  current: number;
  pageSize: number;
}

// 转换入参  以适配useAntdTable
export const transParams = <T, P>(fun: (params: IReqPage<T>) => Promise<P>) => {
  return (page: Page, params: T) => {
    const _params = {
      pageSize: page.pageSize,
      pageNum: page.current,
      queryBean: params || {},
    };
    return fun(_params);
  };
};