import { createSlice } from "@reduxjs/toolkit";
import fetchCategory from "./categoryAPI";



const categorySlice = createSlice({
    name: 'category',
    initialState: [],
    reducers: {
        setActiveCategory(state, { payload }) {
            return [
                ...state.map(el => {
                    if(el.id === payload) {
                        return {
                            ...el,
                            active: !el.active
                        }
                    }
                    return el
                })
            ]
        }
    },
    extraReducers: {
        [fetchCategory.fulfilled]: (state, { payload }) => {
            return payload
        }
    },

})

export const { setActiveCategory } = categorySlice.actions

export const categoryReducer = categorySlice.reducer;

export const selectCategory = state => state.category;