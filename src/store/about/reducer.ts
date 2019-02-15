import { Reducer } from "redux";
import { AboutState, AboutActionsTypes } from "./types";

// 设置初始状态
const initialState: AboutState = {
  aboutUsList: [],
  loading: false,
  errors: ""
}

const reducer: Reducer<AboutState> = (state = initialState, action) => {
  switch(action.type) {
    case AboutActionsTypes.FETCH_ABOUT_US_LIST: {
      return { ...state, loading: true }
    }
    case AboutActionsTypes.FETCH_ABOUT_US_LIST_SUCCESS: {
      return { ...state, loading: false, aboutUsList: action.payload }
    }
    case AboutActionsTypes.FETCH_ABOUT_US_LIST_ERROR: {
      return { ...state, loading: false, errors: action.payload }
    }

    default: {
      return state;
    }
  }
}

export { reducer as AboutReducer };