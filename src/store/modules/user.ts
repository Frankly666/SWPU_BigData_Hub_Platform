import { createSlice } from "@reduxjs/toolkit";

interface IState {
  avatar: string;
  userId: number | null;
  userName: string;
}

const initialState: IState = {
  avatar: "",
  userId: null,
  userName: ""
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
    },
    changeUserNameAction(state, { payload }) {
      state.userName = payload;
    }
  }
});

export const { changeAvataAction, changeUserIdAction, changeUserNameAction } =
  mainSlice.actions;
export default mainSlice.reducer;
