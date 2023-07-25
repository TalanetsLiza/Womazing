import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import ProductCategoryType from "../../types/product/ProductCategoryType";
import ProductType from "../../types/product/ProductType";
import RequestStatusType from "../../types/requestStatus/RequestStatusType";

type FetchShopParamsType = undefined | {
    category?: ProductCategoryType,
}

export const fetchShop = createAsyncThunk<ProductType[], FetchShopParamsType>(
    "shop/fetchShop",
    async (params) => {
        let url = "http://localhost:3001/shop";
        if (params?.category) {
            url += `?categories_like=${params.category}`;
        }
        const responce = await fetch(url);
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
