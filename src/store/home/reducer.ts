// reducer页面
import { Reducer } from "redux";
import { HomeState, HomeActionTypes } from "./types";

// 对store中的state进行操作
const initialState: HomeState = {
  homeInfo: {
    id: "",
    name: "",
    tel: "",
    card: ""
  },
  loading: false,
  errors: ""
}

// reducer调用action方法对数据进行操作
const reducer: Reducer<HomeState> = (state = initialState, action) => {
  switch(action.type){
    case HomeActionTypes.FETCH_HOME_INFO:
      // case返回了一个对象
      {
        return {...state, loading: true}
      }
    case HomeActionTypes.FETCH_HOME_INFO_SUCCESS: 
      {
        return {...state, homeInfo: action.payload, loading: false}
      }
    case HomeActionTypes.FETCH_HOME_INFO_ERROR: 
      {
        return {...state, errors: action.payload, loading: false}
      }

    default:
      {
        return state;
      }
  }
}

export { reducer as homeReducer };
