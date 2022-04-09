import { DeveloperInfo } from '@/@types/developer';

export type DevPageType = PageType | 'auth' | 'white';

export interface DevState {
  detailVisible: boolean;
  IPVisible: boolean;
  authorityVisible: boolean;
  currentDev?: DeveloperInfo;
  type?: DevPageType;
}
