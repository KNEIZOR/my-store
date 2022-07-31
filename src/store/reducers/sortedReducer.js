const initialState = {
    cards: []
}

const ADD_CARDS = 'ADD_CARDS'
const SORTED_CARDS = 'SORTED_CARDS'
const DELETE_ALL_CARDS = 'DELETE_ALL_CARDS'

export const sortedReducer = (state = initialState, action) => {
    switch(action.type) {
        case ADD_CARDS:
            return {...state , cards: [...state.cards, ...action.payload]}
    
        case SORTED_CARDS:
            return {...state, cards: [...state.cards.filter((card) => card.title.toLowerCase().includes(action.payload.toLowerCase()))]}

        case DELETE_ALL_CARDS:
            return {...state, cards: []}


        default:
            return state
    }
}

export const addCardsAction = (payload) => ({type: ADD_CARDS, payload})
export const sortedCardsAction = (payload) => ({type: SORTED_CARDS, payload})
export const deleteAllCardsAction = () => ({type: DELETE_ALL_CARDS})

