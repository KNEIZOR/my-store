const initialState = {
    query: ''
}

const ADD_QUERY = 'ADD_QUERY'
const DELETE_QUERY = 'DELETE_QUERY'

export const queryReducer = (state = initialState, action) => {
    switch(action.type) {
        case ADD_QUERY:
            return {...state , query: action.payload}
    
        case DELETE_QUERY:
            return {...state, cards: ''}

        default:
            return state
    }
}

export const addQueryAction = (payload) => ({type: ADD_QUERY, payload})
export const deleteQueryAction = () => ({type: DELETE_QUERY})

