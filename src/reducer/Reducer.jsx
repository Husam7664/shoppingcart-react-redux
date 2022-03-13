const Reducer = (cart = [], action) => {
  if (action.type === 'ADD') {
    let tempcart = cart.filter((props) => props.id === action.payload.id)
    console.log(tempcart)

    if (tempcart < 1) {
      return [...cart, action.payload]
    } else {
      return cart
    }
  }
  if (action.type === 'REMOVE') {
    return cart.filter((props) => props.id !== action.payload.id)
  }
  if (action.type === 'INCREASE') {
    let tempcart = cart.map((props) => {
      if (props.id === action.payload.id) {
        return { ...props, quantity: props.quantity + 1 }
      }
      return props
    })
    return tempcart
  }
  if (action.type === 'DECREASE') {
    let tempcart = cart.map((props) => {
      if (props.id === action.payload.id) {
        return { ...props, quantity: props.quantity - 1 }
      }
      return props
    })
    return tempcart
  }
  return cart
}

export default Reducer
