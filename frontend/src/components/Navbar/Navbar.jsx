import React, { useState } from 'react'
import './Navbar.css'
import {assets} from '../../assets/assets'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { StoreContext } from '../../context/StoreCntext'


const Navbar = ({setShowLogin}) => {

  const [menu,setMenu]=useState("home")
  const {getToatalCartAmount}=useContext(StoreContext)
  
  return (
    <div className='navbar'>

        <Link to='/'><img src={assets.logo} alt="" className='logo' /></Link>
      <ul className="navbar-menu">

        <Link to='/' onClick={()=>setMenu("home")} className={menu==='home' ? 'active' : ""
        }>home</Link>

        <a href='#explore-menu' onClick={()=>setMenu("menu")} className={menu==='menu' ? 'active' : ""}>menu</a>

        <a href='#app-download' onClick={()=>setMenu("mobile-app")} className={menu==='mobile-app' ? 'active' : ""}>mobile-app</a>

        <a href='#footer' onClick={()=>setMenu("contact-us")} className={menu==='contact-us' ? 'active' : ""}>contact us</a>

      </ul>
      <div className="navbar-right">

        <img src={assets.search_icon} alt=""  />
        <div className="navbar-search-icon">

        <div className="basket-container">
        <Link to='/cart'><img  className = "basket-icon" src={assets.basket_icon} alt="" />
         <div className={getToatalCartAmount() === 0 ? "":"dot"}></div>
         
         </Link>
        </div>

         {/* <div className={getToatalCartAmount() === 0 ? "":"dot"}></div> */}
         
        </div>
        <button onClick={()=>setShowLogin(true)}>
          Sign in
        </button>
      </div>
    </div>
  )
}

export default Navbar
