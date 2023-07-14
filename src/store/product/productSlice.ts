import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import ProductType from "../../types/product/ProductType";
import RequestStatusType from "../../types/requestStatus/RequestStatusType";

export const fetchProduct = createAsyncThunk<ProductType, number>(
    "shop/fetchProduct",
    async (id) => {
        const responce = await fetch(`http://localhost:3001/shop/${id}`);
        return await responce.json();
    },
);

interface StateType {
    data: ProductType | null,
    status: RequestStatusType,
    error: string | null,
}

const initialState: StateType = {
    data: null,
    status: "",
    error: null,
};

const productSlice = createSlice({
    name: "product",
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder.addCase(fetchProduct.pending, (state) => {
            state.status = "loading"
        });
        builder.addCase(fetchProduct.fulfilled, (state, action) => {
			state.status = "success";
			state.data = action.payload;
		});
		builder.addCase(fetchProduct.rejected, (state, action) => {
			state.status = "failed";
            state.error = action.error.message ?? null;
		});
    }
});

export default productSlice.reducer;

