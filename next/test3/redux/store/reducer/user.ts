import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
interface userType {
    email: string | null;
    value: number;
    status: 'idle' | 'loading' | 'failed';
}
const initialState: userType = {
    email: 'firstMail',
    value: 0,
    status: 'idle',
};

export const fetchAsync = createAsyncThunk('counter/fetchAsync', async (text: string) => {
    console.log('thunk...', text);
    const resp = await fetch('https://api.countapi.xyz/hit/opesaljkdfslkjfsadf.com/visits');
    const data = await resp.json();
    return data.value;
});

export const slice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        login: (state, action) => {
            state.email = action.payload;
        },
        thunk: (state, action) => {
            state.value += action.payload;
        },
    },

    extraReducers: {
        [fetchAsync.pending.type]: (state) => {
            state.status = 'loading';
        },
        [fetchAsync.fulfilled.type]: (state, action) => {
            state.status = 'idle';
            state.value = action.payload;
        },
        [fetchAsync.rejected.type]: (state) => {
            state.status = 'failed';
        },
    },
});

export const user = slice.name;
export const userReducer = slice.reducer;
export const userAction = slice.actions;
