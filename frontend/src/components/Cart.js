import { PayPalButtons } from '@paypal/react-paypal-js'
import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

export const Cart = () => {
  const cookies = useSelector(state => state.cookies)

  const total = cookies.map(cookie => 
    cookie.selected === true && 
    cookie.price * cookie.quantity).reduce((a, b) => a + b)

  const onApprove = async (data, actions) => {
    const order = await actions.order.capture()
    console.log(order)
  }

  const onCancel = () => {
    window.location.href = '/cancel'
  }

  const onError = () => {
    window.location.href = '/error'
  }

return (
    <>
    <Link exact='true' to='/'>Home</Link>
    <h2>Cart</h2>
    {cookies.map(cookie => cookie.selected === true && 
      <div key={cookie.id}>
        <p>{cookie.name}</p>
        <p>{cookie.quantity} @ ${cookie.price}.00</p>
        <p>SubTotal: ${cookie.quantity * cookie.price}.00</p>
        </div>
    )}
    <p>Total: ${total}.00</p>
    <PayPalButtons 
      onApprove={onApprove}
      onCancel={onCancel}
      onError={onError} />
    </>
  )
}

export default Cart