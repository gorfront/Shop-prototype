import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const fetchCategory = createAsyncThunk(
    'category/fetchCategory',
    async function() {
        const response = await axios.get('https://fakestoreapi.com/products/categories');

        let count = new Date().getTime().toString()

        const initialData = response.data;

        const data = initialData.map(el => ({
            title: el,
            active: false,
            id: ++count,
        }))

        return data
    }
)


export default fetchCategory