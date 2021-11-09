import React from 'react'
import { useSelector } from 'react-redux'
import { Quantity } from './Quantity'

export const Cookies = () => {
  const state = useSelector(state => state.cookies)

  return (
    <>
    {state.map(cookie => 
      <>
      <h4>{cookie.name}</h4>
      <img alt='cookie' src={cookie.image} height='200'/>
      <p>{cookie.description}</p>
      <p>${cookie.price}.00</p>
      <Quantity cookie={cookie} />
      </>
    )}
    </>
  )
}