import React from "react";
import Checkoutform from "../Components/Checkoutform";
import Header from "../Components/Header";
import { useCart } from "../Contextapi/Cartcontext";

const Checkout = () => {
  const { total_item, total_price, shipingtotal } = useCart();
  return (
    <>
      <Header />

      <section className="checkout-form">
        <div className="chekout">
          <Checkoutform />
          <div className="checkout-details-inner">
            <div className="checkout-shipping">
              <h5>Shipping</h5>
              <p>{shipingtotal}</p>
            </div>
            <div className="checkout-total">
              <h5>Total Amount</h5>
              <p> {total_item * total_price + shipingtotal}</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Checkout;
