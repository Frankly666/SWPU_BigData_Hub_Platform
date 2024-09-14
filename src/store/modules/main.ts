import { LOGIN_TOKEN } from "@/global/constant";
import { ITags } from "@/type/users";
import { createSlice } from "@reduxjs/toolkit";

interface IState {
  isLogin: boolean;
  isShowLoading: boolean;
  tagName: ITags;
  isShowHeader: boolean;
  isOutlineFixed: boolean;
}

const initialState: IState = {
  isLogin: localStorage.getItem(LOGIN_TOKEN) ? true : false,
  isShowLoading: false,
  tagName: "",
  isShowHeader: true,
  isOutlineFixed: false
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
    },
    changeIsShowHeaderAction(state, { payload }) {
      state.isShowHeader = payload;
    },
    changeIsOutlineFixed(state, { payload }) {
      state.isOutlineFixed = payload;
    }
  }
});

export const {
  changeIsLoginAction,
  changeIsShowLoadingAction,
  changeTagNameAction,
  changeIsShowHeaderAction,
  changeIsOutlineFixed
} = mainSlice.actions;
export default mainSlice.reducer;
