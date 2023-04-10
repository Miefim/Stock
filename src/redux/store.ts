import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";

import stocksSlice from "./slices/stocksSlice";
import logoSlice from "./slices/logoSlice";

export const store = configureStore({
   reducer: {
      stocksSlice,
      logoSlice
   }
})

export type RootState = ReturnType<typeof store.getState>

export const useAppDispatch = () => useDispatch<typeof store.dispatch>()