'use client';

import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import counterReducer from './Features/counter/couterSlice';
import { TypedUseSelectorHook, useSelector } from 'react-redux';

const store = configureStore({
    reducer: {
        counter: counterReducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppThunk = ThunkAction<void, RootState, null, Action<string>>;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export default store;
