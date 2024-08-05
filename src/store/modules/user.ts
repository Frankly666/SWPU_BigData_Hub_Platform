import { createSlice } from "@reduxjs/toolkit";

interface IState {
  avatar: string;
}

const initialState: IState = {
  avatar: ""
};

const mainSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    changeAvataAction(state, { payload }) {
      state.avatar = payload;
    }
  }
});

export const { changeAvataAction } = mainSlice.actions;
export default mainSlice.reducer;
