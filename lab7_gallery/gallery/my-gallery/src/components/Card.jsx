import React from "react";
import GoodsCard from "./GoodsCard";
import Gyoza from "../Images/gyoza.jpg";
import Miso from "../Images/miso.jpg";
import Mochi from "../Images/mochi.jpg";
import Ramen from "../Images/ramen.jpg";
import Sushi from "../Images/sushi.jpg";
import Takoyaki from "../Images/takoyaki.jpg";
import Onigiri from "../Images/tuna-onigiri.jpg";
import Soba from "../Images/soba.jpg";

const Card = () => {
  return (
    <div className="product">
      <GoodsCard image={Gyoza} name="Gyoza" price="150 грн" />
      <GoodsCard image={Miso} name="Miso Soup" price="90 грн" />
      <GoodsCard image={Mochi} name="Mochi" price="75 грн" />
      <GoodsCard image={Ramen} name="Ramen" price="230 грн" />
      <GoodsCard image={Sushi} name="Sushi Set" price="300 грн" />
      <GoodsCard image={Takoyaki} name="Takoyaki" price="180 грн" />
      <GoodsCard image={Onigiri} name="Onigiri" price="70 грн" />
      <GoodsCard image={Soba} name="Soba Soup" price="145 грн" />
    </div>
  );
};

export default Card;
