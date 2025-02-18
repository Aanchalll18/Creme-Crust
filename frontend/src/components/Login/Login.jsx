import React, { useState } from 'react'
import { assets } from '../../assets/assets'

const Login = ({setShowLogin}) => {
  const [currState,setCurrState]=useState("Login")
  return (
    <div>
      <form action="" className="login-container">
        <div className="login-popup-title">
          <h2>{currState}</h2>
          <img onClick={()=>setShowLogin(false)} src={assets.cross_icon} alt="" />
        </div>
        <div className="login-input">
          {currState ==='Login'?<></>:<input type="text" required placeholder='Your Name'/>}
          <input type="email" required placeholder='Your email'/>
          <input type="password" required placeholder='Password'/>

        </div>
        <button>
          {currState === "Sign Up" ? "Create account":"Login"}
        </button>
        <div className="login-condition">
          <input type="checkbox" name="" id="" required/>
          <p>By continuing,i agree tothe terms of use & privacy policy</p>
        </div>
      </form>
    </div>
  )
}

export default Login
