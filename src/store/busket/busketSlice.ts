import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import ProductType from "../../types/product/ProductType";
import RequestStatusType from "../../types/requestStatus/RequestStatusType";
import { RootStateType } from "../store";

interface BusketItemType {
    id: number,
    count: number,
}

interface StateType {
    items: BusketItemType[],
    itemsData: ProductType[],
    status: RequestStatusType,
    error: string | null,
}

const getInitialState = (): StateType => {
    const storageItems = localStorage.getItem("busket");
    const items: BusketItemType[] = storageItems ? JSON.parse(storageItems) : [];

    return {
        items,
        itemsData: [],
        status: "",
        error: null,
    };
};

const saveToLocalSrorage = (state: StateType) => {
    const jsonState = JSON.stringify(state.items);
    localStorage.setItem("busket", jsonState);
};

export const fetchBusketItemsData = createAsyncThunk<ProductType[], void, { state: RootStateType }>(
    "busket/fetchBusketItemsData",
    async (_: void, { getState }) => {
        const state = getState();
        const ids = state.busket.items.map((item) => item.id);
        if (!ids.length) {
            return [];
        }
        const searceParams = ids.map((id) => `id=${id}`).join("&");
        const responce = await fetch(`http://localhost:3001/shop?${searceParams}`);
        return await responce.json();
    },
);

const busketSlice = createSlice({
    name: "busket",
    initialState: getInitialState(),
    reducers: {
        add: (state, action: PayloadAction<number>) => {
            const id = action.payload;
            const newItem: BusketItemType = { id, count: 1 };
            state.items.push(newItem);
            saveToLocalSrorage(state);
        },
        remove: (state, action: PayloadAction<number>) => {
            const id = action.payload;
            state.items = state.items.filter((item) => item.id !== id);
            state.itemsData = state.itemsData.filter((item) => item.id !== id);
            saveToLocalSrorage(state);
        },
    },
    extraReducers(builder) {
        builder.addCase(fetchBusketItemsData.pending, (state) => {
            state.status = "loading"
        });
        builder.addCase(fetchBusketItemsData.fulfilled, (state, action) => {
			state.status = "success";
			state.itemsData = action.payload;
		});
		builder.addCase(fetchBusketItemsData.rejected, (state, action) => {
			state.status = "failed";
            state.error = action.error.message ?? null;
		});
    },
});

export const { add, remove } = busketSlice.actions;

export default busketSlice.reducer;
