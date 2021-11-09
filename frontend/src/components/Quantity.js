import React from 'react'
import { useDispatch } from 'react-redux'
import { addToCart, addQuantity, subtractQuantity } from '../actions/cartActions'

export const Quantity = ({cookie}) => {
  const dispatch = useDispatch()

  return (
    <>
     {cookie.selected === false
        ? <button onClick={() => dispatch(addToCart(cookie.id))}>Add To Cart</button> 
        : <>
          <button onClick={() => dispatch(subtractQuantity(cookie.id))} >-</button>
          {cookie.quantity} 
          <button onClick={() => dispatch(addQuantity(cookie.id))}>+</button>
          </>
        }
    </>
  )
}

