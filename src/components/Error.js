import React from 'react'
import { Link } from 'react-router-dom'

export const Error = () => {
  return(
    <>
    <p>There was an unexpected error. You payment has not been processed.</p>
    <Link exact="true" to='/'>Home</Link>
    </>
  )
}

export default Error