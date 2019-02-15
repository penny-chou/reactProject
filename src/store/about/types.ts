// 设置用户信息
export interface AboutUsInfo {
  name: string;
  age: number;
  tel: string;
  card: string;
}

// 设置获取状态
export const enum AboutActionsTypes {
  // 获取用户信息
  FETCH_ABOUT_US_LIST = "@@aboutActionsTypes/FETCH_ABOUT_US_LIST",
  FETCH_ABOUT_US_LIST_SUCCESS = "@@aboutActionsTypes/FETCH_ABOUT_US_LIST_SUCCESS",
  FETCH_ABOUT_US_LIST_ERROR = "@@aboutActionsTypes/FETCH_ABOUT_US_LIST_ERROR"
}

// 设置关于我们状态
export interface AboutState {
  readonly aboutUsList: AboutUsInfo[];
  readonly loading: boolean;
  readonly errors?: string;
}