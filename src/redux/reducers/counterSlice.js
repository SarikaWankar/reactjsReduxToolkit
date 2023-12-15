import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    value: 0
}

const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment: (state) => {  // increment action
            state.value += 1
        },
        decrement: (state) => { // decrement action
            state.value -= 1
        },
        incrementByAmount: (state, action) => { //incrementByAmount action 
            state.value += action.payload
        },
    }
})

export const { increment, decrement, incrementByAmount } = counterSlice.actions;
export default counterSlice.reducer;