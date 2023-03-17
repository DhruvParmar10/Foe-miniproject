import React from 'react'
import Login from './Login'
import supabase from '../config/supabaseClient'
import { useEffect } from 'react'
import { useSession } from '@supabase/auth-helpers-react'
import './css/index.css'

const Home = () => {
  const session = useSession();
  if(!session){
    return <Login/>
  }
  return (
  <div>
    <nav className="navbar">
      <div className="container">
        <div className="navbar-brand">
          <a href="#">Yonex</a>
        </div>
        <div className="navbar-search">
        <div className="input-container">
            <input type="text" name="text" className="input" placeholder="search..."/>
            <span className="icon"> 
              <svg width="19px" height="19px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path opacity="1" d="M14 5H20" stroke="#000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path> <path opacity="1" d="M14 8H17" stroke="#000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path> <path d="M21 11.5C21 16.75 16.75 21 11.5 21C6.25 21 2 16.75 2 11.5C2 6.25 6.25 2 11.5 2" stroke="#000" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"></path> <path opacity="1" d="M22 22L20 20" stroke="#000" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round"></path> </g></svg>
            </span>
          </div>
        </div>
        <div className="navbar-links">
        <ul>
          <li><a href="/Products">Products</a></li>
          <li><a href="/Store">Find A Store </a></li>
          <li><a href="/Review">Get In Touch</a></li>
          <li className="funcli" ><a href="/Login">👤</a></li>
          <li className="funcli" ><a href="/Cart">🛒</a></li>
        </ul>
      </div>
      <div className="navbar-toggle">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  </nav>


  <div >
   <video src="src\pages\images\y2mate.com - Prime Midnight FanMade ad_1080p.mp4" autoPlay muted></video>
  </div>

  <hr/>
  <div> <h1 className="prod1">Our Featured Products</h1></div>

   <hr/>
   <br/>
   <br/>
  <div className="products">
    <div className="card"> <img className="featured" src="src\pages\images\dsc-wildfire-volcano-tennis-cricket-bat-1-removebg-preview.png"/>
      <h2>Wild Fire Bat</h2>
    </div>
    <div className="card"><img className="featured" src="src\pages\images\zoom-fly-5-mens-road-running-shoes-jGsdSl.png" />
      <h2>Nike Shoe</h2>
    </div>
    <div className="card"><img id='coscoBall' className="featured" src="src\pages\images\gold_cup_1_83071537331.png" />
      <h2 className='Cosco'>Cosco Football</h2>
    </div>
    <div className="card"><img className="featured" src="src\pages\images\image (1).png"/>
    <h2>Racket</h2>
    </div>
  </div>
  </div>
    
  )
}

export default Home