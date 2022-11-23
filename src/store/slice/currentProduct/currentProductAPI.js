import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchProduct = createAsyncThunk(
    'currentProduct/fetchProduct',
    async function (id) {
        const response = await axios.get(`https://fakestoreapi.com/products/${id}`)
        const data = response.data

        data.count = 1;

        return data
    }
)