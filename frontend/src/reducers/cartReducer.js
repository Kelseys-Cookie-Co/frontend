import { ADD_TO_CART, ADD_QUANTITY, SUB_QUANTITY } from '../actions/cartActions'
import cookieData from '../cookieData'

const initialState = {
  cookies: cookieData
}

export const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
        return {
          ...state,
          cookies: state.cookies.map(cookie => cookie.id === action.payload ? {
            ...cookie,
            selected: cookie.selected = true
          } : cookie)    
        }
    case ADD_QUANTITY:
      return {
        ...state,
        cookies: state.cookies.map(cookie => cookie.id === action.payload ? {
          ...cookie,
          quantity: cookie.quantity + 1
        } : cookie)    
      }
    case SUB_QUANTITY:
      return {
        ...state,
        cookies: state.cookies.map(cookie => cookie.id === action.payload ? {
          ...cookie,
          quantity: cookie.quantity === 0 ? 0 : cookie.quantity + 1
        } : cookie)    
      }  
    default:
      return state;
  }
}