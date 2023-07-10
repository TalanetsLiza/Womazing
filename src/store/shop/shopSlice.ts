import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import ProductType from "../../types/product/ProductType";
import RequestStatusType from "../../types/requestStatus/RequestStatusType";

export const fetchShop = createAsyncThunk(
    "shop/fetchShop",
    async () => {
        const responce = await fetch("http://localhost:3001/shop");
        return await responce.json();
    },
);

interface StateType {
    data: ProductType[],
    status: RequestStatusType,
    error: string | null,
}

const initialState: StateType = {
    data: [],
    status: "",
    error: null,
};

const shopSlice = createSlice({
    name: "shop",
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder.addCase(fetchShop.pending, (state) => {
            state.status = "loading"
        });
        builder.addCase(fetchShop.fulfilled, (state, action) => {
			state.status = "success";
			state.data = action.payload;
		});
		builder.addCase(fetchShop.rejected, (state, action) => {
			state.status = "failed";
            state.error = action.error.message ?? null;
		});
    }
});

export default shopSlice.reducer;