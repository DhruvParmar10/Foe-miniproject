import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import supabase from "../config/supabaseClient";
import Auth from "../components/Auth";

const ProductPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [Description, setDescription] = useState("");
  const [Rating, setRating] = useState("");
  const [Price, setPrice] = useState("");

  useEffect(() => {
    const fetchProduct = async () => {
      const { data, error } = await supabase
        .from("Products")
        .select()
        .eq("id", id)
        .single();
        console.log(data);

      if (error) {
        navigate("/Products", { replace: true });
      }
      if (data) {
        setName(data.Product_Name);
        setDescription(data.Product_Description);
        setRating(data.Product_Rating);
        setPrice(data.Product_Price);
        
      }

      fetchProduct();
    };
  }, [id, navigate]);

  return (
    <>
      <Auth />
      <div>product - {id}</div>
    </>
  );
};

export default ProductPage;
