export interface HomeInfo {
  id: string;
  name: string;
  tel: string;
  card: string;
}

export const enum HomeActionTypes {
  FETCH_HOME_INFO = "@@homeActionTypes/FETCH_HOME_INFO",
  FETCH_HOME_INFO_SUCCESS = "@@homeActionTypes/FETCH_HOME_INFO_SUCCESS",
  FETCH_HOME_INFO_ERROR = "@@homeActionTypes/FETCH_HOME_INFO_ERROR"
}

export interface HomeState {
  readonly homeInfo: HomeInfo;
  readonly loading: boolean;
  readonly errors: string;
}
