import { createSlice } from "@reduxjs/toolkit";



const searchWordSlice = createSlice({
    name: 'searchWord',
    initialState: '',
    reducers: {
        setSearchWord(state, {payload}) {
            return payload
        }
    },
    extraReducers: {
        
    },

})

export const { setSearchWord } = searchWordSlice.actions

export const searchWordReducer = searchWordSlice.reducer;

export const selectsearchWord = state => state.searchWord;