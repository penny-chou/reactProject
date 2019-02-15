// 设置modal的显示与隐藏
export const enum MsModalActionTypes {
  FETCH_MODAL_VISIBLE = "@@msModalActionTypes/FETCH_MODAL_VISIBLE"
}

export interface MsModalState {
  readonly modalVisible: boolean;
}
