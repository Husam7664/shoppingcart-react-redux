import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

function CartItem() {
  const cart = useSelector((state) => state)
  const dispatch = useDispatch()

  return (
    <>
      {cart.map((props) => {
        return (
          <div className='cart-item' key={props.id}>
            <img src={props.details.image} alt='' width='80' />
            <div className='cart-item-details'>
              <p className='cart-item-name'>{props.name}</p>
              <p>
                {props.details.type} ({props.details.size})
              </p>
              <p></p>
              <p>print Quantity: {props.quantity}</p>
            </div>
            <div className='cart-price'>
              <p
                className='cart-cross'
                onClick={() => dispatch({ type: 'REMOVE', payload: props })}
              >
                x
              </p>

              <p className='price'>${props.details.price * props.quantity}</p>
              <div>
                <Increment {...props} />
                <Decrement {...props} />
              </div>
            </div>
          </div>
        )
      })}
    </>
  )
}

function Increment(props) {
  const dispatch = useDispatch()

  return (
    <>
      <svg
        xmlns='http://www.w3.org/2000/svg'
        fill='none'
        viewBox='0 0 24 24'
        stroke='currentColor'
        className='plus-icon'
        key={props.id}
        onClick={() => dispatch({ type: 'INCREASE', payload: props })}
      >
        <path
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeWidth={2}
          d='M12 6v6m0 0v6m0-6h6m-6 0H6'
        />
      </svg>
    </>
  )
}
function Decrement(props) {
  const dispatch = useDispatch()
  return (
    <>
      <svg
        xmlns='http://www.w3.org/2000/svg'
        fill='none'
        viewBox='0 0 24 24'
        stroke='currentColor'
        key={props.id}
        className='plus-icon'
        onClick={() => {
          if (CartItem.quantity > 1) {
            dispatch({ type: 'DECREASE', payload: props })
          } else {
            dispatch({ type: 'REMOVE', payload: props })
          }
        }}
      >
        <path
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeWidth={2}
          d='M18 12H6'
        />
      </svg>
    </>
  )
}

export default CartItem
