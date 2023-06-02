import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';

interface CounterState {
    value: number;
}

const initialState: CounterState = {
    value: 0,
};

export const incrementAsync = createAsyncThunk<void, void>('counter/incrementAsync', async (_, { dispatch }) => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    dispatch(increment());
});

const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment: (state) => {
            state.value += 1;
        },
        decrement: (state) => {
            state.value -= 1;
        },
    },
});

export const { increment, decrement } = counterSlice.actions;

export default counterSlice.reducer;
