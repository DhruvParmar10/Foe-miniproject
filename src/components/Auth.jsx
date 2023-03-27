import React, {useEffect} from 'react'
import supabase from '../config/supabaseClient';
import { Navigate, useNavigate } from 'react-router-dom';

const Auth = () => {
    const navigate = useNavigate();

    useEffect(() => {
        const checkSession = async () => {
          const { data} = await supabase.auth.getSession();
          if (data.session === null) {
            navigate("/Login");
          }
        };
        checkSession();
      });
  return (
    <></>
  )
}

export default Auth