import { Reducer } from "redux";
import { MsModalState, MsModalActionTypes } from "./types";

// 定义初始化状态
const initialState: MsModalState = {
  modalVisible: false
}

const reducer: Reducer<MsModalState> = (state = initialState, action) => {
  switch(action.type) {
    case MsModalActionTypes.FETCH_MODAL_VISIBLE: {
      return { ...state, modalVisible: action.payload }
    }

    default: {
      return state;
    }
  }
}

export { reducer as msModalReducer };
