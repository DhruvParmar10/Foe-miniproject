import React, { useState, useEffect } from "react";
import supabase from "../config/supabaseClient";
import Auth from "../components/Auth";
import Navbar from "../components/Navbar";
import ProductCard from "../components/ProductCard";
import FliterProduct from "../components/FliterProduct";
import "./css/product.css";

const CDNURL =
  "https://oalncpmnrehvgswerkri.supabase.co/storage/v1/object/public/images/";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");
  const [fliterText,setFliterText] = useState("Custom-order");

  useEffect(() => {
    const fetchProducts = async () => {
      const { data: products, error } = await supabase
        .from("Products")
        .select();
      if (error) {
        console.log("Error fetching products:", error.message);
      } else {
        setProducts(products);
      }
    };
    fetchProducts();
  }, []);

  function onFilterValueChanged(filtervalue){
      setFliterText(filtervalue);
  }

  return (
    <div>
      <Auth />
      <Navbar />
      <div className="grid-container">
        <div className="leftSide">
          <div className="sort-container">
            <p className="catagory-title">Catagory</p>
            <FliterProduct filterValueSelected ={onFilterValueChanged}/>
          </div>
        </div>
        <div className="rightSide">
          <div className="sort-container">
            <h1>Treading Products</h1>
            <div className="searchContainer">
              <div className="container-input">
                <input
                  type="text"
                  placeholder="Search"
                  name="text"
                  className="input"
                  onChange={(e) => {
                    setSearch(e.target.value);
                  }}
                />
                <svg
                  fill="#000000"
                  width="20px"
                  height="20px"
                  viewBox="0 0 1920 1920"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M790.588 1468.235c-373.722 0-677.647-303.924-677.647-677.647 0-373.722 303.925-677.647 677.647-677.647 373.723 0 677.647 303.925 677.647 677.647 0 373.723-303.924 677.647-677.647 677.647Zm596.781-160.715c120.396-138.692 193.807-319.285 193.807-516.932C1581.176 354.748 1226.428 0 790.588 0S0 354.748 0 790.588s354.748 790.588 790.588 790.588c197.647 0 378.24-73.411 516.932-193.807l516.028 516.142 79.963-79.963-516.142-516.028Z"
                    fillRule="evenodd"
                  ></path>
                </svg>
              </div>
            </div>
            <div>
              <div className="product-container">
                {products
                  .filter((item) => {
                    return search.toLowerCase() === ""
                      ? item
                      : item.Product_Name.toLowerCase().includes(search);
                  }).filter((product) => {
                    if(fliterText === "Ball"){
                      return product.Product_Type.includes(fliterText);
                    } else if (fliterText === "Bat"){
                      return product.Product_Type.includes(fliterText);
                    } else if (fliterText === "Shoes"){
                      return product.Product_Type.includes(fliterText);
                    }else {
                      return product;
                    }
                  })
                  .map((product) => (
                    <ProductCard key={product.id} product={product} />
                  ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <button
        onClick={() => {
          supabase.auth.signOut();
        }}
      >
        Signout
      </button>
    </div>
  );
};

export default Products;
