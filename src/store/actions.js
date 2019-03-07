//actions
export const INC_COUNTER = 'INC_COUNTER';
export const DEC_COUNTER = 'DEC_COUNTER';
export const ADD_COUNTER = 'ADD_COUNTER';
export const SUB_COUNTER = 'SUB_COUNTER';
export const ADD_HISTORY = 'ADD_HISTORY';
export const DEL_HISTORY = 'DEL_HISTORY';


// action creators
export const incCounter = () => ({ type: INC_COUNTER });
export const decCounter = () => ({ type: DEC_COUNTER });
export const addCounter = (val) => ({ type: ADD_COUNTER, value: val });
export const subCounter = (val) => ({ type: SUB_COUNTER, value: val });
export const addHistory = () => ({ type: ADD_HISTORY });
export const delHistory = (i) => ({ type: DEL_HISTORY, index: i });



