import { action } from "typesafe-actions";
import { PicActionTypes } from "./types";

// 图片获取
export const fetchPic = () => action(PicActionTypes.FETCH_PIC);
export const fetchPicSuccess = (params: any) => action(PicActionTypes.FETCH_PIC_SUCCESS, params);
export const fetchPicError = (errors: string) => action(PicActionTypes.FETCH_PIC_ERROR, errors);

// 图片显示
export const fetchPicVisible = (visible: boolean) => action(PicActionTypes.FETCH_PIC_VISIBLE, visible);
