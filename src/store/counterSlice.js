import { createSlice } from "@reduxjs/toolkit";

const initialCounterState = {
    counter: 0,
    isCounterVisible: true
}

const counterSlice = createSlice({
  name: 'counter',
  initialState: initialCounterState,
  reducers: {
    increment(state) {
        state.counter++
    },
    decrement(state) {
        state.counter--
    },
    toggle(state) {
        state.isCounterVisible = !state.isCounterVisible
    }
  }
})

export const counterActions = counterSlice.actions
export default counterSlice.reducer