import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../store'

interface ConuterState {
    value: number
}

const initialState: ConuterState = {
    value: 0
}

export const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment: state => {
            state.value += 1
        },
        decrement: state => {
            state.value -= 1
        }
    }
})

export const { increment, decrement } = counterSlice.actions

export default counterSlice.reducer;
