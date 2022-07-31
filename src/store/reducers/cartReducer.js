const initialState = {
    carts: [],
}

const ADD_MANY_CARTS = "ADD_MANY_CARTS"
const ADD_CART = "ADD_CART"
const DELETE_CART = "DELETE_CART"

export const cartReducer = (state = initialState, action) => {
    switch(action.type) {
        case ADD_MANY_CARTS:
            return {...state, carts: [...action.payload]}

        case ADD_CART:
            return {...state, carts: [...state.carts, ...action.payload]}

        case DELETE_CART:
            return {...state, carts: state.carts.filter(cart => cart.id !== action.payload)}

        default:
            return state
    }
}

export const addManyCartsAction = (payload) => ({type: ADD_MANY_CARTS, payload})
export const addCartAction = (payload) => ({type: ADD_CART, payload})
export const deleteCartAction = (payload) => ({type: DELETE_CART, payload})

