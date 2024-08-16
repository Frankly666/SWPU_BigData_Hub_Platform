import { createSlice } from "@reduxjs/toolkit";

interface IState {
  avatar: string;
  userId: number | null;
}

const initialState: IState = {
  avatar: "",
  userId: null
};

const mainSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    changeAvataAction(state, { payload }) {
      state.avatar = payload;
    },
    changeUserIdAction(state, { payload }) {
      state.userId = payload;
    }
  }
});

export const { changeAvataAction, changeUserIdAction } = mainSlice.actions;
export default mainSlice.reducer;
