import React, { useEffect } from "react";
import { useLocation, useParams } from "react-router-dom";
import Addtocar from "../Components/Addtocar";
import Header from "../Components/Header";
import Relatedproduct from "../Components/Relatedproduct";
import Singaproductimg from "../Components/Singaproductimg";
import { useDb } from "../Contextapi/Appprovider";
import gif from "./gif.gif";
const Singalpage = () => {
  const { id } = useParams();

  const API = "https://api.pujakaitem.com/api/products";
  const {
    getsingalproduct,
    singalproduct,
    singalproductloading,
    relatedproduct,
  } = useDb();
  const { company, description, image, name, price, reviews, stars, stock } =
    singalproduct;
  let { category } = singalproduct;
  let { relatedproductdata } = useDb();

  // console.log(category)
  useEffect(() => {
    getsingalproduct(`${API}?id=${id}`);
  }, []);

  useEffect(() => {
    relatedproduct(category);
  }, [category]);

  if (singalproductloading) {
    return (
      <div className="mainloading">
        <img src={gif} alt="loading" />
      </div>
    );
  }
  return (
    <>
      <Header />
      <div className="singalproduct">
        <div className="productimg">
          <Singaproductimg imgs={image} />
        </div>
        <div className="productdetails">
          <div className="details">
            <h1>{name}</h1>
            <h6>
              ({stars} {reviews} Customer reviews)
            </h6>
            <h3>
              Deal of the day
              <span>
                
                <del>{price}</del> {price / 10}
              </span>
            </h3>
            <p>{description}</p>
            <div className="aboutbrand">
              <h3>Stock : {stock ? "In Stock" : "Not In Stock"}</h3>
              <h3>Brand : {company}</h3>
            </div>
            <div className="addtocart">
              {stock > 0 && <Addtocar product={singalproduct} />}
            </div>
          </div>
        </div>
      </div>

      <div className="relatedproduct">
        <h1>Related product</h1>
        <div className="mainrelated">
          <Relatedproduct data={relatedproductdata} />
        </div>
      </div>
    </>
  );
};

export default Singalpage;
