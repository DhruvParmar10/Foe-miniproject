import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'
import Products from './pages/Products'
import supabase from './config/supabaseClient'
import { useSession } from '@supabase/auth-helpers-react'

function App() {
  return (
  <>
    <div className='container'>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/Login' element={<Login/>}/>
        <Route path='/Register' element={<Register/>}/>
        <Route path='/success' element={<Products/>}/>
        <Route path='/' element={<Home/>}/>
        <Route path='/' element={<Home/>}/>
      </Routes>
      {/* <Auth
    supabaseClient={supabase}
    appearance={{ theme: ThemeSupa }}
    providers={['google', 'facebook', 'twitter']}
    /> */}
    </div>
  </>
    
     
  )
}

export default App
