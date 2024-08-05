import { configureStore } from "@reduxjs/toolkit";
import {
  useSelector,
  useDispatch,
  TypedUseSelectorHook,
  shallowEqual
} from "react-redux";

import mainReducer from "@/store/modules/main";
import userReducer from "@/store/modules/user";

const store = configureStore({
  reducer: { main: mainReducer, user: userReducer }
});

// 给自己的store定义类型
type GetStateFnType = typeof store.getState;
export type IRootState = ReturnType<GetStateFnType>;
type DispatchType = typeof store.dispatch;

// useAppSelector的hook
export const useAppSelector: TypedUseSelectorHook<IRootState> = useSelector;
export const useAppDispatch: () => DispatchType = useDispatch;
export const shallowEqualApp = shallowEqual;

export default store;
