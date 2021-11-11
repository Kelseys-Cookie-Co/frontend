import React from 'react'
import { Link } from 'react-router-dom'

export const Complete = () => {
  return(
    <>
    <p>Thanks for your order!</p>
    <Link exact="true" to='/'>Home</Link>
    </>
  )
}

export default Complete