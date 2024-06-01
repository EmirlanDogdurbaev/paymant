// src/store/slices/entitySlice.js
import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import axios from 'axios';
import {token} from "./transactionSlice.js";

const initialState = {
    entities: [],
    status: 'idle',
    error: null,
};

export const addEntity = createAsyncThunk(
    'entities/addEntity',
    async ({title, account}, {rejectWithValue}) => {
        try {
            const response = await axios.post('http://192.168.212.149:8000/api/v1/app/create', {title, account}, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            return response.data;
        } catch (err) {
            return rejectWithValue(err.response.data);
        }
    }
);

const appSlice = createSlice({
    name: 'entities',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(addEntity.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(addEntity.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.entities.push(action.payload);
            })
            .addCase(addEntity.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.payload;
            });
    },
});

export default appSlice.reducer;
