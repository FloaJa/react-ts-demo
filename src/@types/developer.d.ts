export interface DeveloperParams {
  appKey?: string;
  devName?: string;
}

export interface DeveloperInfo {
  appKey?: string; // 开发者标识（appKey）
  devCode?: string; // 开发者code
  devName?: string; // 开发者名称
  encryptType?: string; // 加密类型
  id: number; // 主键id
  status?: number; // 状态
}

export interface SaveDeveloperInfo {
  appKey: string; // 开发者标识（appKey）
  devCode: string; // 开发者code
  devName: string; // 开发者名称
  encryptType: string; // 加密类型
  operateTime?: string; // 操作时间
  operator?: string; // 操作人
}

export interface EditDeveloperInfo {
  appKey: string; // 开发者标识（appKey）
  devCode: string; // 开发者code
  devName: string; // 开发者名称
  encryptType: string; // 加密类型
  id: number; // 主键
  operateTime: string; // 操作时间
  operator: string; // 操作人
}

export interface WhiteListParams {
  developerId: number; // 开发者主键
  ip: string; // ip
  operateTime?: string; // 操作时间
  operator?: string; // 操作人
}

export interface WhiteListInfo {
  id: number; // 开发者白名单主键
  ip?: string; // 开发者白名单ip
}

export interface PrivilegeIdDTO {
  id: number;
}
export interface AuthorityInfo {
  apiName: string; // api名称
  id: number; // 授权ID
  serviceName: string; // api服务名
  throttledCntBySec: number; // 1秒内调用次数
  version: string; // 版本
}

export interface SaveAuthorityDTO {
  apiId: number; // 接口ID
  developerId: number; // 开发者ID
  operateTime?: string; // 操作时间
  operator?: string; // 操作人
  throttledCntBySec: number; // 1秒内调用次数
}
