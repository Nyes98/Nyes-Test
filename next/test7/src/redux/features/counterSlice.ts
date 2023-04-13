import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

interface CounterState {
    value: number;
    loading: boolean;
}

const initialState: CounterState = {
    value: 0,
    loading: false,
};

export const incrementAsync = createAsyncThunk('counter/incrementAsync', async (amount: number) => {
    const curPromise = await new Promise((resolve, reject) =>
        setTimeout(() => {
            if (false) {
                reject('not done');
            }
            resolve('done');
        }, 1000)
    ).then((pastResolve) => {
        console.log(pastResolve);
    });

    return amount;
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
    extraReducers: (builder) => {
        builder
            .addCase(incrementAsync.pending, (state) => {
                state.loading = true;
            })
            .addCase(incrementAsync.fulfilled, (state, action) => {
                state.loading = false;
                state.value += action.payload;
            });
    },
});

const { actions, reducer: counterReducer } = counterSlice;

export const { increment, decrement } = actions;

export default counterReducer;
