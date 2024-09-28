import {combineReducers} from "redux";
import {counterReducer} from "@/redux/counter";
import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";

const reducer = combineReducers({
    counter: counterReducer,
})

export const reduxStore = configureStore({
    reducer,
    devTools: true,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        thunk: true,
    }),
})

export type RootState = ReturnType<typeof reducer>;
export type AppDispatch = typeof reduxStore.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();