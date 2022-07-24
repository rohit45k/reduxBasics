import { createStore } from "redux";

const initialState = {
    counter: 0,
    isCounterVisible: true
}

const counterReducer = (state=initialState, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return {
                ...state, 
                counter: state.counter+1
            }    
        case 'DECREMENT':
            return {
                ...state, 
                counter: state.counter-1
            }    
        case 'TOGGLE':
            return {
                ...state,
                isCounterVisible: !state.isCounterVisible
            }
        default:
            return state
    }
}

const store = createStore(counterReducer);

export default store;