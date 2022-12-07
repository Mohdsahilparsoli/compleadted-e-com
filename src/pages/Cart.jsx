import React from "react";
import { Link } from "react-router-dom";
import Header from "../Components/Header";
import { useCart } from "../Contextapi/Cartcontext";
import {FaPlus,FaMinus,FaTrash}  from "react-icons/fa"
const Cart = () => {
  const { cart, remove, shipingtotal, total_item, total_price, emptycart ,decrement,increment} = useCart();
  console.log( )
  if (cart.length === 0) {
    return (
      <>
        <Header />
      <div className="emptycart">
      <h1>
        
        <Link to={"/product"}> Continue shoping</Link>
      </h1>
      </div>
      </>
    );
  }
  return (
    <>
      <Header />

      <div className="datacart">
        {cart.map((value) => {
          const { name, price, image, setcolor,  id, amount } = value;
          return (
            <div className="mycarts">
              <div className="cart1">
                <img src={image} alt="cartiamg" />
                <span>
                  <h6>{name} </h6>
                  <h6
                    style={{
                      backgroundColor: setcolor,
                      padding: "5px",
                      width: "5px",
                      borderRadius: "50%",
                      height: "5px",
                    }}
                  ></h6>
                </span>
              </div>
              <div className="cart1">
                <h6 className="total">{price}</h6>
              </div>
              <div className="cartinput">
                <button onClick={()=>increment(id)}><FaPlus/></button>
                <input type="text" value={amount} />
                <button onClick={()=>decrement(id)}><FaMinus/></button>
              </div>

              <div className="cart1">
                <h6 className="total">{amount * price}</h6>
              </div>

              <div className="cart1">
                <button className="delte" onClick={() => remove(id)}> <FaTrash/></button>
              </div>
            </div>
          );
        })}
      </div>

      <div className="shoping">
        <Link to={"/product"}> Continue shoping</Link>
        <button onClick={() => emptycart()}>Empty cart</button>
      </div>

<div className="total">
  <div className="cupun">
    <input type="text" />
    <button>Apply Coupn</button>
  </div>
<div className="totaldata">
<h3> Total {total_price*total_item} </h3>
  <h3>Shiping {shipingtotal}</h3>
  <h3>Subtotal {total_price*total_item + shipingtotal}</h3>
  <Link to={"/chekout"}>Proceed to checkout </Link>
</div>
</div>



    </>
  );
};

export default Cart;
