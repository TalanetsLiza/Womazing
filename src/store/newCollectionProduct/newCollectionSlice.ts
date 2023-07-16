import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import ProductType from "../../types/product/ProductType";
import RequestStatusType from "../../types/requestStatus/RequestStatusType";

export const fetchNewCollection = createAsyncThunk<ProductType[]>(
    "product/fetchNewCollection",
    async () => {
        const responce = await fetch(`http://localhost:3001/shop?newCollection=true`);
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

const newCollectionSlice = createSlice({
    name: "product",
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder.addCase(fetchNewCollection.pending, (state) => {
            state.status = "loading"
        });
        builder.addCase(fetchNewCollection.fulfilled, (state, action) => {
			state.status = "success";
			state.data = action.payload;
		});
		builder.addCase(fetchNewCollection.rejected, (state, action) => {
			state.status = "failed";
            state.error = action.error.message ?? null;
		});
    }
});

export default newCollectionSlice.reducer;
