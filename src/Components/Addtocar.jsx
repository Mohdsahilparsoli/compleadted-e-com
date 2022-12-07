import { useState } from "react";
import { FaChair, FaCheck } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useCart } from "../Contextapi/Cartcontext";

const Addtocar = ({product}) => {
const {colors,stock,id}=product;
const [setcolor,updatedcoloer] = useState(colors[0])
const [amount,setamount]=useState(1)
const {getcartdata} = useCart()
const increase = ()=>{
  stock>amount?setamount(amount+1):setamount(stock)
}
const decrease = ()=>{
amount>1?setamount(amount-1):setamount(1)
}
  return (<>
<div className="colors">
  {
    colors.map((value,index)=>{
      return <button key={index} style={{backgroundColor:value}} className={setcolor===value?"acttive":""} onClick={()=>{
        updatedcoloer(value)
      }}> { setcolor===value?<FaCheck/>:""}</button>
    })
  }
</div>
<daiv className="carsts">
<div className="inputfiled">
  <button onClick={()=>increase(id)} >+</button>
<input type="text" value={amount} />
<button onClick={()=>decrease(id)}>-</button>
</div>

<div className="addtocart">
  <Link to="/cart">
  <button className="addme" onClick={()=>getcartdata(product,amount, id, setcolor)}>Add to cart</button>
  </Link>
  
</div>
</daiv>

</>
  )
}

export default Addtocar