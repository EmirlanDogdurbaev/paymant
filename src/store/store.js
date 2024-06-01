import {configureStore} from '@reduxjs/toolkit';
import authReducer from './slices/authSlice.js';
import transactionReducer from './slices/transactionSlice.js';
import appReducer from './slices/appSlice.js';

const store = configureStore({
    reducer: {
        auth: authReducer,
        transaction: transactionReducer,
        entities: appReducer,
    },
});

export default store;