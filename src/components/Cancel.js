import React from 'react'
import { Link } from 'react-router-dom'

export const Cancel = () => {
  return(
    <>
    <p>Your order has been canceled</p>
    <Link exact="true" to='/'>Home</Link>
    </>
  )
}

export default Cancel