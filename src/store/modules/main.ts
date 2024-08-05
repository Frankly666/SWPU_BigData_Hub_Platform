import { LOGIN_TOKEN } from "@/global/constant";
import { ITags } from "@/type/users";
import { createSlice } from "@reduxjs/toolkit";

interface IState {
  isLogin: boolean;
  isShowLoading: boolean;
  tagName: ITags;
}

const initialState: IState = {
  isLogin: localStorage.getItem(LOGIN_TOKEN) ? true : false,
  isShowLoading: false,
  tagName: ""
};

const mainSlice = createSlice({
  name: "main",
  initialState,
  reducers: {
    changeIsLoginAction(state, { payload }) {
      state.isLogin = payload;
    },
    changeIsShowLoadingAction(state, { payload }) {
      state.isShowLoading = payload;
    },
    changeTagNameAction(state, { payload }) {
      state.tagName = payload;
    }
  }
});

export const {
  changeIsLoginAction,
  changeIsShowLoadingAction,
  changeTagNameAction
} = mainSlice.actions;
export default mainSlice.reducer;
