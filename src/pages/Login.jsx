import React from 'react'
import supabase from '../config/supabaseClient'
import { Auth } from '@supabase/auth-ui-react'
import { useNavigate } from 'react-router-dom'
import { ThemeSupa } from '@supabase/auth-ui-shared'
import './css/login.css'

const Login = () => {
  let navigate = useNavigate();
    supabase.auth.onAuthStateChange(async(event) => {
      if(event !== "SIGNED_OUT"){
        navigate("/success");
      } else {
        navigate("/");
      }
    })
    async function loginWithGithub(){
      await supabase.auth.signInWithOAuth({
        providers: 'github',
      });
    }

  return (
    <Auth
    supabaseClient={supabase}
    appearance={{ theme: ThemeSupa }}
    providers={['google', 'github', 'twitter']}
    />
  )
}

export default Login