import React from "react";
import "./Bottle.css";
const Bottle = ({ bottle }) => {
  const { img, name, price } = bottle;
  // console.log(bottle);

  return (
    <div className="bottles">
      <img src={img} alt="" />
      <div className="text-content">
        <h4>{name}</h4>
        <h3>$ {price} </h3>
        <button>Add to Cart</button>
      </div>
    </div>
  );
};

export default Bottle;
