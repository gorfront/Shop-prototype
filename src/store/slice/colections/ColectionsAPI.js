import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


export const fetchColections = createAsyncThunk(
    'colections/fetchColections',
    async function() {
        const response = await axios.get("https://fakestoreapi.com/products");
        const data = response.data;
        return data
    }
)