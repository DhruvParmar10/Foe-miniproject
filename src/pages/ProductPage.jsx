import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import supabase from "../config/supabaseClient";

const ProductPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [rating, setRating] = useState("");
  const [price,setPrice] = useState("");
  const [image,setImage] = useState("");

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

  return (
    <>
      <div className="container">
        <div className="image">
          <img src={image} alt="image" />
        </div>
        <div className="text-container">
          <h1>{name}</h1>
          <p>{description}</p>
          <p>Rating: {rating}</p>
          <p>Price: ${price}</p>
        </div>
      </div>
    </>
  );
};

export default ProductPage;
