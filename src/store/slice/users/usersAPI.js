const { createAsyncThunk } = require("@reduxjs/toolkit");
const { default: axios } = require("axios");

export const fetchUsers = createAsyncThunk(
    'users/fetchUsers',
    async function() {
        const response = await axios.get('https://fakestoreapi.com/users');
        const initialData = response.data

        const data = initialData.map(el => ({
            ...el,
            cart: [],
        }))

        return data
    }
)