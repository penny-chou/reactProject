import { Reducer } from "redux";
import { PicState, PicActionTypes } from "./types";

// 初始化状态
const initialState: PicState = {
  picList: [],
  loading: false,
  errors: "",
  picVisible: false
}

// 通过reducer来分别执行不同的fetch
const reducer: Reducer<PicState> = (state = initialState, action) => {
  switch(action.type) {
    // 图片获取
    case PicActionTypes.FETCH_PIC: {
      return { ...state, loading: true }
    }
    case PicActionTypes.FETCH_PIC_SUCCESS: {
      return { ...state, loading: false, picList: action.payload }
    }
    case PicActionTypes.FETCH_PIC_ERROR: {
      return { ...state, loading: false, errors: action.payload }
    }

    // 图片显示/隐藏
    case PicActionTypes.FETCH_PIC_VISIBLE: {
      return { ...state, picVisible: action.payload }
    }
    default: {
      return state;
    }
  }
}

export { reducer as picReducer }
