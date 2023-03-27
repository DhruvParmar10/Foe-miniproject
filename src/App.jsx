import { Route, Router, Routes, NavLink } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'
import Products from './pages/Products'
import Review from './pages/Review'
import { useEffect } from 'react'
import { useState } from 'react'
import supabase from './config/supabaseClient'



function App() {
  const [session,setSession] = useState(null);

  useEffect(() => {
    supabase.auth.getSession().then(({data: {session} }) => {
      setSession(session)
    })

    supabase.auth.onAuthStateChange(( _event,session) => {
      setSession(session)
    })
    console.log(session);
  },[])
  return (
  <>
      <Routes basename='/E-commerce'>
        <Route path='/' element={<Home/>}/>
        <Route path='/Login' element={<Login/>}/>
        <Route path='/Register' element={<Register/>}/>
        <Route path='/Products' element={<Products/>}/>
        <Route path='/Reviews' element={<Review/>}/>
        <Route path='/' element={<Home/>}/>
      </Routes>
  </>
    
     
  )
}

export default App
