import { request } from 'umi';
import { message } from 'antd';

/**
 * 把对象的undefined转换为null
 * @param obj 请求参数
 */
export function convertUndefinedToNull(obj: any): any {
  if (Array.isArray(obj)) {
    return obj.map((i) => {
      if (typeof i === 'object' && i !== null) {
        return convertUndefinedToNull(i);
      }
      if (i === undefined) {
        return null;
      }
      return i;
    });
  }
  const temp = {};
  Object.keys(obj).forEach((key) => {
    if (typeof obj[key] === 'object' && obj[key] !== null) {
      temp[key] = convertUndefinedToNull(obj[key]);
    } else if (obj[key] === undefined) {
      temp[key] = null;
    } else {
      temp[key] = obj[key];
    }
  });
  return temp;
}

export const API_PREFIX = {
  channel: '/api/channel/bops',
};

export const requestDeal = (url: any, options: any) => {
  const headers = {
    'X-Service-Name': 'zat-tulips-bops', // 申请得到的sso service
  };

  // 验证接口validate2以外都接口都需添加 X-Usercenter-Session
  if (url !== '/validate2') {
    headers['X-Usercenter-Session'] =
      localStorage.getItem('ATLANTIS_SESSION_ID') || '';
  }

  // 合并headers
  options.headers = {
    ...options.headers,
    ...headers,
  };

  // 返回新的url和options
  return {
    url,
    options,
  };
};

export const responseCheck = async (response: any, p: any) => {
  try {
    const data = await response.clone().json();
    // iframe 拒绝访问
    // response.setHeader('X-Frame-Options', 'SAMEORIGIN');
    const { code, status, message: msg } = data;
    if (status === 0 || status > 300) {
      message.error(msg);
    }
  } catch (error) {
    console.error('当前返回数据为文件流');
  }
  return response;
};

export default request;
