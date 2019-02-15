import { action } from "typesafe-actions";
import { AboutActionsTypes } from "./types";

// 获取用户信息
export const fetchAboutUsList = () => action(AboutActionsTypes.FETCH_ABOUT_US_LIST);
export const fetchAboutUsListSuccess = (parmas: any) => action(AboutActionsTypes.FETCH_ABOUT_US_LIST_SUCCESS, parmas);
export const fetchAboutUsListError = (errors: string) => action(AboutActionsTypes.FETCH_ABOUT_US_LIST_ERROR, errors);  
