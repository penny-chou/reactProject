import { action } from "typesafe-actions";
import { MsModalActionTypes } from "./types";

// 定义action
export const fetchMsModalVisible = (visible: boolean) => action(MsModalActionTypes.FETCH_MODAL_VISIBLE, visible);
