import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import ProductCategoryType from "../../types/product/ProductCategoryType";
import ProductType from "../../types/product/ProductType";
import RequestStatusType from "../../types/requestStatus/RequestStatusType";

type FetchShopParamsType = {
    category?: ProductCategoryType,
    page: number,
    limit: number,
}
type FetchShopResultType = {
    data: ProductType[],
    total: number,
}

export const fetchShop = createAsyncThunk<FetchShopResultType, FetchShopParamsType>(
    "shop/fetchShop",
    async (params) => {
        let url = `http://localhost:3001/shop?_page=${params.page}&_limit=${params.limit}`;
        if (params?.category) {
            url += `&categories_like=${params.category}`;
        }
        const responce = await fetch(url);
        const data = await responce.json();
        const total = +(responce.headers.get("X-Total-Count") ?? 0);

        return {
            data,
            total,
        };
    },
);

interface StateType {
    data: ProductType[],
    total: number,
    status: RequestStatusType,
    error: string | null,
}

const initialState: StateType = {
    data: [],
    total: 0,
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
			state.data = action.payload.data;
            state.total = action.payload.total;
		});
		builder.addCase(fetchShop.rejected, (state, action) => {
			state.status = "failed";
            state.error = action.error.message ?? null;
		});
    }
});

export default shopSlice.reducer;
