import { createSlice } from "@reduxjs/toolkit";

interface IState {
  isShowLogin: boolean;
}

const initialState: IState = {
  isShowLogin: false
};

const mainSlice = createSlice({
  name: "main",
  initialState,
  reducers: {
    changeIsShowLogin(state, { payload }) {
      state.isShowLogin = payload;
    }
  }
});

export const { changeIsShowLogin } = mainSlice.actions;
export default mainSlice.reducer;
