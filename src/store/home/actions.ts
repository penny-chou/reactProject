import { action } from "typesafe-actions";
import { HomeActionTypes } from "./types";

export const fetchHomeInfo = () => action(HomeActionTypes.FETCH_HOME_INFO);
export const fetchHomeInfoSuccess = (params: any) => action(HomeActionTypes.FETCH_HOME_INFO_SUCCESS, params);
export const fetchHomeInfoError = (errors: string) => action(HomeActionTypes.FETCH_HOME_INFO_ERROR, errors);
