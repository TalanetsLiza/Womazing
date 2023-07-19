import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook } from "react-redux/es/types";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import shopSlice from "./shop/shopSlice";
import productSlice from "./product/productSlice";
import relatedProductsSlice from "./relatedProducts/relatedProductsSlice";
import newCollectionSlice from "./newCollectionProduct/newCollectionSlice";
import busketSlice from "./busket/busketSlice";

const rootReducer = combineReducers({
	shop: shopSlice,
	product: productSlice,
	relatedProducts: relatedProductsSlice,
	newCollection: newCollectionSlice,
	busket: busketSlice,
});

export const store = configureStore({
	reducer: rootReducer,
});

type AppDispatchType = typeof store.dispatch;

export const useAppDispatch: () => AppDispatchType = useDispatch;

export type RootStateType = ReturnType<typeof store.getState>;

export const useAppSelector: TypedUseSelectorHook<RootStateType> = useSelector;