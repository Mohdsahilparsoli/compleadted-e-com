import React from 'react'
import { useFilter } from '../Contextapi/Filter'

const Sorting = () => {
  const {filter_products,sortdata} = useFilter();

    return (
    <div className="sort">
        <p>{filter_products.length} Products</p>
      <select  onClick={sortdata}>
        <option value="please select one">Please select one</option>
        <option value="" disabled></option>
      <option value="a-to-z">a-to-z</option>
      <option value="" disabled></option>
      <option value="z-to-a">z-to-a</option>
      <option value="" disabled></option>
      <option value="low-high">Low-high</option>
      <option value="" disabled></option>
      <option value="high-low">high-low</option>

      </select>
          </div>
  )
}

export default Sorting