import { createSlice } from "@reduxjs/toolkit";
import { fetchProduct } from "./currentProductAPI";

const currentProduct = createSlice({
    name: 'currentProduct',
    initialState: null,
    reducers: {
        incCount(state){
            state.count++
        },
        decCount(state) {
            state.count = state.count > 1 ? state.count - 1 : state.count
        }
    },
    extraReducers: {
        [fetchProduct.fulfilled]: (state, {payload}) => {
            return payload
        }
    }
})

export const selectCurrentProduct = state => state.currentProduct;

export const { incCount, decCount } = currentProduct.actions;

export const currentProductReducer = currentProduct.reducer;