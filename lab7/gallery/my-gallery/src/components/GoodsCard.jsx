import React from "react";
import "./GoodsCard.css";

const GoodsCard = (props) => {
  return (
    <div className="product_box">
      <img src={props.image} alt=""></img>
      <div className="description">
        <h2>{props.name}</h2>
        <p className="price">{props.price}</p>
      </div>
    </div>
  );
};

export default GoodsCard;
