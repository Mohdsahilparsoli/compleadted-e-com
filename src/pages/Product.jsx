import React from 'react'
import Filtersection from '../Components/Filtersection';
import Header from '../Components/Header';
import Productlist from '../Components/Productlist';
import Sorting from '../Components/Sorting';
import { useDb } from '../Contextapi/Appprovider'
import gif from "./gif.gif"

const Product = () => {
const {apiloading} = useDb();
if(apiloading){
  return <div className="mainloading">
     <img src={gif} alt="" />
  </div>
}
return (
<>
   <Header/>
<div className="main">
  <div className="filtersection">
    <Filtersection/>
  </div>
  <div className="products">
    <div className="productsorting">
    <Sorting/>
    </div>
    <div className="mainproduct">
      <Productlist/>
    </div>
  </div>
</div>

</>
  )
}

export default Product