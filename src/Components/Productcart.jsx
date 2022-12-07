import React from 'react'
import { Link } from 'react-router-dom'
const Productcart = ({data}) => {

  return (
<>
{
    data.map((value)=>{
        const {price,name,id,image} = value
        return <div key={id} className="cart">
            <Link to={`/product/${id}`} >
            <div className="cart">
            <img src={image} alt="" />
            <span> <h3>{name}</h3> <h3>{price}</h3></span>
            </div>
            </Link>
        </div>
    })
}

</>
  )
}

export default Productcart