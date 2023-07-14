import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import ProductType from "../../types/product/ProductType";
import RequestStatusType from "../../types/requestStatus/RequestStatusType";

export const fetchRelatedProduct = createAsyncThunk<ProductType[], ProductType>(
    "shop/fetchRelatedProduct",
    async (productData: ProductType) => {
        const searceParams = productData.relatedItems.map((id) => `id=${id}`).join("&");
        const responce = await fetch(`http://localhost:3001/shop?${searceParams}`);
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

const relatedProductsSlice = createSlice({
    name: "relatedProducts",
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder.addCase(fetchRelatedProduct.pending, (state) => {
            state.status = "loading"
        });
        builder.addCase(fetchRelatedProduct.fulfilled, (state, action) => {
			state.status = "success";
			state.data = action.payload;
		});
		builder.addCase(fetchRelatedProduct.rejected, (state, action) => {
			state.status = "failed";
            state.error = action.error.message ?? null;
		})
    }
});

export default relatedProductsSlice.reducer;

