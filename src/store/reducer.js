import * as actions from './actions.js';

const initialState = {
    counter: 0,
    history: []
};

const reducer = (state = initialState, action) => {
    switch(action.type){
        case actions.INC_COUNTER: return incCounter(state);
        case actions.DEC_COUNTER: return decCounter(state);
        case actions.ADD_COUNTER: return addCounter(state, action);
        case actions.SUB_COUNTER: return subCounter(state, action);
        case actions.ADD_HISTORY: return addHistory(state);
        case actions.DEL_HISTORY: return delHistory(state, action);
        default: return state;
    }
};

const incCounter = (state) => ({
    ...state,
    counter: state.counter + 1
});

const decCounter = (state) => ({
    ...state,
    counter: state.counter - 1
});

const addCounter = (state, action) => ({
    ...state,
    counter: state.counter + action.value
})

const subCounter = (state, action) => ({
    ...state,
    counter: state.counter - action.value
})

const addHistory = (state) => ({
    ...state,
    history: state.history.concat(state.counter)
})

const delHistory = (state, action) => {
    let history = [ ...state.history ];
    history.splice(action.index, 1);
    return {
        ...state,
        history: history
    };
}

export default reducer;