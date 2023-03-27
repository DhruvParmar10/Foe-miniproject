import React, { useState, useEffect } from "react";
import supabase from "../config/supabaseClient";
import Auth from "../components/Auth";
import Navbar from "../components/Navbar";
import ProductCard from "../components/ProductCard";
import FliterProduct from "../components/FliterProduct";
import "./css/product.css";

const CDNURL =
  "https://oalncpmnrehvgswerkri.supabase.co/storage/v1/object/public/images/";

const Cart = () => {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");
  const [fliterText,setFliterText] = useState("Custom-order");

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

  return (
    <div>
      <Auth />
      <Navbar />
              <div className="Cart-container">
                {products
                  .map((product) => (
                    <div key={products.id}>
                      <div className="name">{product.Name}</div>
                      <div className="Price">{product.Price}</div>
                    </div>
                  ))}
              </div>
            </div>
          
  );
};

export default Cart;
