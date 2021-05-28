import React from "react";

export default function Card4({ card_src, card_title, card_description }) {
  return (
    <div key={card_title} className="card4">
      <img src={card_src} alt="" />
      <h3>{card_title}</h3>
      <p>{card_description}</p>
    </div>
  );
}
