import axios from '../api/Products'
import React, { useState, useEffect } from 'react'
import Cart from '../components/Cart'
import Main from '../components/Main'
import Sidebar from '../components/Sidebar'

function App() {
  const [products, setProducts] = useState([])
  const [selectedSizes, setSelectSizes] = useState([])
  const [cartItems, setCartItems] = useState([])

  //get api products
  useEffect(() => {
    axios
      .get('/prasadhewage/ecommerce/shipments')
      .then((res) => {
        const apiendpoints = res.data
        console.log(apiendpoints)

        setProducts(res.data)
      })
      .catch((err) => {
        console.log(err)
      })
  }, [])

  const handleClick = (size) => {
    if (selectedSizes.includes(size)) {
      setSelectSizes(selectedSizes.filter((s) => s !== size))
    } else {
      setSelectSizes(selectedSizes.concat(size))
    }
  }

  return (
    <div className='wrapper flex space-between'>
      <Sidebar
        products={products}
        selectedSizes={selectedSizes}
        handleClick={handleClick}
      />
      <Main products={products} selectedSizes={selectedSizes} />
      <Cart cartItems={cartItems} />
    </div>
  )
}

export default App
