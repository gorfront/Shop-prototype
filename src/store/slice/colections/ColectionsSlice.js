import { createSlice } from "@reduxjs/toolkit";
import { fetchColections } from "./ColectionsAPI";





const colectionsSlice = createSlice({
    name: "colections",
    initialState: [],
    reducers: {},
    extraReducers: {
        [fetchColections.fulfilled]: (state, {payload}) => {
            return payload
        }
    },
})

// export const {} = colectionsSlice.actions;

export const colectionsReducer = colectionsSlice.reducer;

export const selectColections = state => state.colections

