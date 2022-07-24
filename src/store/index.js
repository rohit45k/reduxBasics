import { createSlice, configureStore } from "@reduxjs/toolkit";

const initialState = {
    counter: 0,
    isCounterVisible: true
}

const counterSlice = createSlice({
  name: 'counter',
  initialState,
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


const store = configureStore({
    reducer: counterSlice.reducer
});

export const counterActions = counterSlice.actions

export default store;