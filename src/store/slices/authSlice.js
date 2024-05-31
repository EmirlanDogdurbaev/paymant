import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import axios from 'axios';

export const api = 'http://192.168.212.149:8000/api/v1';

export const signup = createAsyncThunk('/user/register', async ({firstname, password, email, lastname, phone}) => {
    // eslint-disable-next-line no-useless-catch
    try {
        const response = await axios.post(`${api}/user/register`, { password, email});

        console.log(response.data.token);
        const token = response.data.access_token;
        localStorage.setItem('access_token', token);
        localStorage.setItem('email', email);
        return {email, token};

    } catch (error) {
        throw error;
    }
});


export const login = createAsyncThunk('/login', async ({password, email}) => {
    // eslint-disable-next-line no-useless-catch
    try {
        const response = await axios.post(`${api}/user/login`, {password, email});
        console.log(response.data);
        const token = response.data;
        localStorage.setItem('access_token', token);
        localStorage.setItem('email', email);
        localStorage.setItem('role', response.data.role);

        return {email, token};
    } catch (error) {
        throw error;
    }
});

export const refreshToken = createAsyncThunk('auth/refreshToken', async () => {
    // eslint-disable-next-line no-useless-catch
    try {
        const refreshToken = localStorage.getItem('refresh_token');
        const response = await axios.post(`${api}/refresh_token`, {refreshToken});
        const newToken = response.data.access_token;
        localStorage.setItem('refresh_token', newToken);
        return newToken;
    } catch (error) {
        throw error;
    }
});

const authSlice = createSlice({
    name: 'auth',
    initialState: {
        token: localStorage.getItem('access_token') || null,
        email: localStorage.getItem('email') || null,
        status: '',
        error: null,
    },
    reducers: {
        logout: (state) => {
            localStorage.removeItem('access_token');
            localStorage.removeItem('email');
            localStorage.removeItem('username');

            state.token = null;
            state.email = null;
            state.username = null;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(login.pending, (state) => {
                state.status = 'loading';
                state.error = null;
            })
            .addCase(login.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.token = action.payload.token;
                state.email = action.payload.email;

            })
            .addCase(login.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            })
            .addCase(signup.pending, (state) => {
                state.status = 'loading';
                state.error = null;
            })
            .addCase(signup.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.token = action.payload.token;
                state.email = action.payload.email;
            })
            .addCase(signup.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            })
            .addCase(refreshToken.fulfilled, (state, action) => {
                state.token = action.payload;
            });
    },
});

export const {logout} = authSlice.actions;

export default authSlice.reducer;