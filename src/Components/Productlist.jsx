import React from 'react'
import { useFilter } from '../Contextapi/Filter'
import Productcart from './Productcart'

const Productlist = () => {
    const {filter_products} = useFilter()
  return (
    <>
    <Productcart data={  filter_products}/>
    
    </>
  )
}

export default Productlist