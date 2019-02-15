// 设置图片状态
export interface PicInfo {
  id: string;
  url: string;
}

// 定义图片的获取
export const enum PicActionTypes {
  FETCH_PIC = "@@picActionTypes/FETCH_PIC",
  FETCH_PIC_SUCCESS = "@@picActionTypes/FETCH_PIC_SUCCESS",
  FETCH_PIC_ERROR = "@@picActionTypes/FETCH_PIC_ERROR",

  FETCH_PIC_VISIBLE = "@@picActionTypes/FETCH_PIC_VISIBLE"
}

// 设置图片请求的状态
export interface PicState {
  readonly loading: boolean;
  readonly errors: string;
  readonly picList: PicInfo[];
  readonly picVisible: boolean;
}
