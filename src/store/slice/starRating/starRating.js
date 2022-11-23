import { createSlice } from "@reduxjs/toolkit";

const starRating = createSlice({
    name: 'starRating',
    initialState: {
        ratingStar: [],
        hoverStar: [],
    },
    reducers: {
        
    },
    extraReducers: {},
})

// export const {} = starRating.actions

export const starRatingReducer = starRating.reducer;

export const selectStarRating = state => state.starRating;