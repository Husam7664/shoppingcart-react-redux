import React from 'react'

function Sidebar(props) {
  let sizes = props.products.reduce((acc, cv) => {
    acc = acc.concat(cv.details.size)
    return acc
  }, [])
  let uniqueSizes = [...new Set(sizes)]
  let { selectedSizes } = props
  return (
    <aside className='flex-20 sidebar'>
      <div className='flex wrap'>
        {uniqueSizes.map((size, key) => (
          <span
            key={key}
            onClick={() => props.handleClick(size)}
            className={`size ${selectedSizes.includes(size) ? 'active' : ''}`}
          >
            {size}
          </span>
        ))}
      </div>
    </aside>
  )
}

export default Sidebar
