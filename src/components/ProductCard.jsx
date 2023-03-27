import React from "react";
import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
  return (
    <div className="product-card">
      <img
        className="Product_img"
        src={product.Image_url}
        alt={product.Product_Name}
      />
      <h3 className="Product_name">{product.Product_Name}</h3>
      <p className="Product_Description">{product.Product_Description}</p>
      <p className="Product_Price">${product.Product_Price}</p>
      <p className="Product_Rating">{product.Product_Rating}⭐</p>
      <div className="buttons">
        <Link to={"/" + product.id}>
          <span className="material-symbols-outlined">add</span>
        </Link>
      </div>
    </div>
  );
};

export default ProductCard;
