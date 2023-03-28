import React, { useState, useEffect } from "react";
import supabase from "../config/supabaseClient";
import Auth from "../components/Auth";
import Navbar from "../components/Navbar";
import { useNavigate } from "react-router-dom";

import "./css/cart.css";

const CDNURL =
  "https://oalncpmnrehvgswerkri.supabase.co/storage/v1/object/public/images/";

const Cart = () => {
  const navigate = useNavigate();

  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");
  const [fliterText, setFliterText] = useState("Custom-order");

  useEffect(() => {
    const fetchProducts = async () => {
      const { data: products, error } = await supabase
        .from("Products-Cart")
        .select();
      if (error) {
        console.log("Error fetching products:", error.message);
      } else {
        setProducts(products);
      }
    };
    fetchProducts();
  }, []);

  async function removeFromCart() {
    const { data, error } = await supabase
      .from("Products-Cart")
      .delete()
  }

  return (
    <div>
      <Auth />
      <Navbar />
      <div className="cart-container">
        <h1 className="cart-title">Cart 🛒</h1>
        <div className="cart-items">
          {products.map((product) => (
            <div className="cart-id" key={products.id}>
              <div className="cart-name">{product.Name}</div>
              <div className="cart-price">{product.Price}</div>
            </div>
          ))}
        </div>
        <hr />
        <div className="chck">
        <button  className="btn" onClick={() => {navigate('/Payment')}}>Checkout</button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
