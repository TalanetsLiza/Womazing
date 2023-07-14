import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook } from "react-redux/es/types";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import shopSlice from "./shop/shopSlice";
import productSlice from "./product/productSlice";

const rootReducer = combineReducers({
	shop: shopSlice,
	product: productSlice,
});

export const store = configureStore({
	reducer: rootReducer,
});

type AppDispatchType = typeof store.dispatch;

export const useAppDispatch: () => AppDispatchType = useDispatch;

type RootStateType = ReturnType<typeof store.getState>;

export const useAppSelector: TypedUseSelectorHook<RootStateType> = useSelector;