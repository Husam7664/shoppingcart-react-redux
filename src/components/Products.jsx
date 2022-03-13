import React, { useState } from 'react'
import OrderBy from './OrderBy'
import { useSelector, useDispatch } from 'react-redux'

const Products = (props) => {
  const [selectedOrder, setSelctedOrder] = useState()

  const handleOrderBy = (event) => {
    setSelctedOrder(event.target.value)
  }

  const handleOrderProducts = (order, sizes, products) => {
    let sortedProducts = [...products]

    if (sizes.length > 0) {
      sortedProducts = sortedProducts.filter((p) => {
        for (const size of sizes) {
          if (p.details.size.includes(size)) {
            return true
          }
        }
      })
    }

    if (order === 'highest') {
      sortedProducts = sortedProducts.sort(
        (a, b) => b.details.price - a.details.price
      )
    }
    if (order === 'lowest') {
      sortedProducts = sortedProducts.sort(
        (a, b) => a.details.price - b.details.price
      )
    }
    return sortedProducts
  }

  let products = handleOrderProducts(
    selectedOrder,
    props.selectedSizes,
    props.data
  )

  return (
    <div>
      <div className='products-filter'>
        <p>
          <u>
            {`${props.data.length} Product${
              props.data.length > 1 ? 's' : ''
            } found.`}{' '}
          </u>
        </p>
        <OrderBy selectedOrder={selectedOrder} handleOrderBy={handleOrderBy} />
      </div>
      <div className='flex wrap'>
        {products.map((product) => {
          product.quantity = 1

          return (
            <Product
              {...product}
              key={product.id}
              handleAddToCart={props.handleAddToCart}
            />
          )
        })}
      </div>
    </div>
  )
}

function Product(props) {
  const cart = useSelector((state) => state)

  const dispatch = useDispatch()
  // console.log(props)
  return (
    <div className='product-item'>
      <div className='product-label'>{props.details.tag}</div>
      <img
        className='product-item-img'
        src={props.details.image}
        alt={props.type}
      />
      <div className='product-item-details'>
        <p className='product-item-title'>{props.name}</p>
        <div className='line'></div>
        <h3 className='product-item-price'>${props.details.price}</h3>
        <button onClick={() => dispatch({ type: 'ADD', payload: props })}>
          Add To Cart
        </button>
      </div>
    </div>
  )
}
export default Products
