import React from "react";
import "./ProductCard.css";

const ProductCard = ({ image, title, price, link, description }) => {
  return (
    <div className="card">
      <div className="product-image">
        <div className="price-display">{price}</div>
        <img src={image} className="card-img-top" alt={title} />
      </div>
      <h5 className="card-title">{title}</h5>
      <p className="card-text">{description}</p>
      <div className="button-container">
        <button
          type="button"
          className="btn btn-outline-dark btn-sm"
          href={link}
        >
          {"> See product"}
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
