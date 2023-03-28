import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import supabase from "../config/supabaseClient";
import "./css/product.css";

const ProductPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  let cart = false;

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [rating, setRating] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState("");

  const [value, setValue] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      const { data, error } = await supabase
        .from("Products")
        .select()
        .eq("id", id)
        .single();

      if (error) {
        navigate("/Products", { replace: true });
      }
      if (data) {
        setName(data.Product_Name);
        setDescription(data.Product_Description);
        setRating(data.Product_Rating);
        setPrice(data.Product_Price);
        setImage(data.Image_url);
        console.log(data);
      }
    };

    fetchProducts();
  }, [id, navigate]);

  async function addToCart() {
    const { data, error } = await supabase
      .from("Products-Cart")
      .insert([{ Name: name, Price: price }]);

    if (error) {
      console.log(error);
    }
    console.log("cart added");
    navigate('/cart');
    isCart();
  }

  async function removeFromCart() {
    const { data, error } = await supabase
      .from("Products-Cart")
      .delete()
      .eq("Name", name);
  }

  async function isCart() {
    const { data, error } = await supabase
      .from("Products-Cart")
      .select()
      .eq("Name", name);
    if (data) {
      cart = true;
    } else {
      cart = false;
    }
  }

  function increment() {
    setValue(value + 1);
  }

  return (
    <>
      <div className="pagecontainer">
        <div className="img-container">
          <div className="image">
            <img className="dynamic" src={image} alt="image" />
          </div>
        </div>
        <div className="text-container">
          <div className="name-container">
            <div className="name-product">
              <h1>{name}</h1>
              <p>{description}</p>
              <p>Rating: {rating}</p>
              <p>Price: ${price}</p>
            
          </div>
          <p>cartItem: {value}</p>
          </div>
          <div className="productpage-button">
          <button className="addtocart" onClick={addToCart}>Add to Cart 🛒</button>

          {isCart() && (
            <button className="addtocart" onClick={removeFromCart}>Remove from cart</button>
          )}
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductPage;
