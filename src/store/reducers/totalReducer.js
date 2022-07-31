const initialState = {
    results: [],
    total: 0,
    count: 1,
};

const ADD_RESULT = "ADD_RESULT";
const TOTAL_SUM = "TOTAL_SUM";
const UPDATE_RESULT = "UPDATE_RESULT";

export const totalReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_RESULT:    
            return { ...state, results: [...state.results, action.payload] };

        case TOTAL_SUM:
            return {
                ...state,
                total: state.results.length
                    ? state.results
                          .map((result) => result.result)
                          .reduce((prev, current) => prev + current)
                    : null,
            };

        case UPDATE_RESULT:
            return {
                ...state,
                results: state.results.filter(
                    (result) => result.id !== action.payload
                ),
            };


        default:
            return state;
    }
};

export const addResultAction = (payload) => ({ type: ADD_RESULT, payload });
export const totalSumAction = () => ({ type: TOTAL_SUM });
export const updateResultAction = (payload) => ({
    type: UPDATE_RESULT,
    payload,
});
