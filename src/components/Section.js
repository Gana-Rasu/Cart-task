import React from "react";
import Card from "./Card";
import "./Section.css";

const card_data = [
  {
    cardtitle: "Fancy product",
    price: "$40.00 - $80.00",
    buttonvalue: "View options",
  },
  {
    cardtitle: "Special Item",
    price: "$18.00",
    star: "⭐⭐⭐⭐⭐",
    buttonvalue: "Add to Cart",
  },
  {
    cardtitle: "Special Item",
    price: "$18.00",
    star: "⭐⭐⭐⭐⭐",
    buttonvalue: "Add to Cart",
  },
  {
    cardtitle: "Special Item",
    price: "$18.00",
    star: "⭐⭐⭐⭐⭐",
    buttonvalue: "Add to Cart",
  },
  {
    cardtitle: "Fancy product",
    price: "$40.00 - $80.00",
    buttonvalue: "View options",
  },
  {
    cardtitle: "Fancy product",
    price: "$40.00 - $80.00",
    buttonvalue: "View options",
  },
  {
    cardtitle: "Special Item",
    price: "$18.00",
    star: "⭐⭐⭐⭐⭐",
    buttonvalue: "Add to Cart",
  },
  {
    cardtitle: "Special Item",
    price: "$18.00",
    star: "⭐⭐⭐⭐⭐",
    buttonvalue: "Add to Cart",
  },
];

function Section() {
  return (
    <>
      <section>
        <div className="cards">
          {card_data.map((data) => (
            <Card key={data.id} card_datas={data} />
          ))}
        </div>
      </section>
    </>
  );
}

export default Section;
