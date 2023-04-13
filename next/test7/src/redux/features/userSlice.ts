import { HYDRATE } from 'next-redux-wrapper';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

interface UserState {
    id: string;
    name: string;
    loading: boolean;
}

const initialState: UserState = {
    id: 'first',
    name: 'ys',
    loading: false,
};

export const idAsync = createAsyncThunk('user/idChange', async (input: string) => {
    await new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('done');
        }, 1000);
    });

    console.log('done');

    return input;
});

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        idChange: (state, action) => {
            state.id = action.payload;
        },
        nameChange: (state, action) => {
            state.name = action.payload;
        },
    },

    extraReducers: {
        [idAsync.pending.type]: (state) => {
            state.loading = true;
        },
        [idAsync.fulfilled.type]: (state, action) => {
            state.loading = false;
            state.id = action.payload;
        },
    },
});

const { actions, reducer: userReducer } = userSlice;

export const { idChange, nameChange } = actions;

export default userReducer;
