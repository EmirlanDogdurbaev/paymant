import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import axios from 'axios';
import {api} from "./authSlice.js";

export const token = localStorage.getItem('access_token');
export const createTransaction = createAsyncThunk('transaction/create', async (itemData) => {
    try {
        const response = await axios.post(`${api}/transaction/create`, itemData, {headers: token});
        return response.data;
    } catch (error) {
        throw error;
    }
});

const transactionSlice = createSlice({
    name: 'transaction',
    initialState: {
        status: 'idle',
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(createTransaction.pending, (state) => {
                state.status = 'loading';
                state.error = null;
            })
            .addCase(createTransaction.fulfilled, (state) => {
                state.status = 'succeeded';
            })
            .addCase(createTransaction.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            });
    },
});

export default transactionSlice.reducer;
