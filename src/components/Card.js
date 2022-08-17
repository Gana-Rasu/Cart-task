import React, { useContext, useState } from "react";
import { Context } from "../Context";
import "./Card.css";

function Card({ card_datas }) {
  const [cartButton, setCartButton] = useState("Add to cart");

  const contx = useContext(Context);
  const incrementCart = () => {
    contx.setCartTotal(contx.cartTotal + 1);
    setCartButton("Remove from cart");
  };
  const decrementCart = () => {
    contx.setCartTotal(contx.cartTotal - 1);
    setCartButton("Add to cart");
  };

  return (
    <>
      <div className="card" style={{ width: "15rem" }}>
        {card_datas.buttonvalue === "Add to Cart" ? (
          <span className="badge bg-dark">Sale</span>
        ) : (
          ""
        )}
        <div className="cardspan">450*300 </div>
        <div className="card-body">
          <h5 className="card-title">{card_datas.cardtitle}</h5>
          {card_datas.star}
          <p className="card-text">{card_datas.price}</p>
          <a
            href="/#"
            className="btn btn-outline-dark"
            onClick={
              cartButton === "Add to cart" ? incrementCart : decrementCart
            }
          >
            {cartButton}
          </a>
        </div>
      </div>
    </>
  );
}

export default Card;
