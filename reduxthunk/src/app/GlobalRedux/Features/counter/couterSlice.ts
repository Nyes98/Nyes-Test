'use client';

import { createSlice, Dispatch } from '@reduxjs/toolkit';
import { ThunkAction } from 'redux-thunk';
import { RootState } from '../../store'; // Assuming you have a store setup
import { AnyAction } from '@reduxjs/toolkit';

export interface CounterState {
    value: number;
}

const initialState: CounterState = {
    value: 0,
};

export const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment: (state) => {
            state.value += 1;
        },
        decrement: (state) => {
            state.value -= 1;
        },
        incrementByAmount: (state, action) => {
            state.value += action.payload;
        },
    },
});

export const { increment, decrement, incrementByAmount } = counterSlice.actions;

// 비동기 작업을 수행하는 thunk 액션 생성자
export const incrementAsync = (amount: number): ThunkAction<Promise<void>, RootState, undefined, AnyAction> => {
    return async (dispatch, getState) => {
        await new Promise((resolve) => setTimeout(resolve, 1000)); // 1초 대기
        dispatch(incrementByAmount(amount));
    };
};

export default counterSlice.reducer;
