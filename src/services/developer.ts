// import developerList from '../@types/developer.d';
import developerList from '../../mock/developerList.json';
import request from '@/utils/request';
import { DeveloperInfo, DeveloperParams } from '@/@types/developer';
import { transParams } from './tools';

// useAntdTable接收的入参与我们接口规范不同  使用transParams转一下
export const getDeveloperList = transParams(
  (params: IReqPage<DeveloperParams>): Promise<PageBean<DeveloperInfo>> => {
    return Promise.resolve({
      list: JSON.parse(developerList),
      total: 30,
    } as PageBean<DeveloperInfo>);
    // mock 数据
    // return new Promise((res) => {
    //   setTimeout(() => {
    //     const data = JSON.parse(developerList) as DeveloperInfo[];
    //     return res({ list: data, total: 30 } as PageBean<DeveloperInfo>);
    //   }, 3e2);
    // });

    // 真实场景
    return request<IResPageBean<DeveloperInfo>>(
      '/api/v1/developer/getDeveloperList',
      {
        method: 'POST',
        data: params,
      }
    );
  }
);

// 入参只有一个字段  没必要新建一个类型  直接在行内写了
// 返回结果只有成功和失败, 不关心 res.data 类型, 所以直接使用 IRes 即可
// 删除开发者
export const deleteDeveloperById = (params: { id: number }) => {
  return request<IRes>(`/api/v1/developer/deleteDeveloperById`, {
    method: 'POST',
    data: params,
  });
};
