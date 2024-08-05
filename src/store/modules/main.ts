import { LOGIN_TOKEN } from "@/global/constant";
import { createSlice } from "@reduxjs/toolkit";

interface IState {
  isLogin: boolean;
  isShowLoading: boolean;
}

const initialState: IState = {
  isLogin: localStorage.getItem(LOGIN_TOKEN) ? true : false,
  isShowLoading: false
};

const mainSlice = createSlice({
  name: "main",
  initialState,
  reducers: {
    changeIsLoginAction(state, { payload }) {
      state.isLogin = payload;
    },
    changeIsShowLoading(state, { payload }) {
      state.isShowLoading = payload;
    }
  }
});

export const { changeIsLoginAction, changeIsShowLoading } = mainSlice.actions;
export default mainSlice.reducer;
