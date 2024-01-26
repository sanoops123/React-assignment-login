import React from 'react'
import './Loginform.css';

function Loginform() {
  return (
    <div className='style'>
        <form action=''>
          <h1>Login</h1>
          <label className='mail'>
            Email</label>
          <div className="input-box">
               <input type="text" placeholder='Username' required/>
          </div>
          <label className='psw'>
            Password</label>
          <div className="input-box">
            <input type="text" placeholder='Password' required/>
          </div>
          <div className="remember-forgot">
            <label><input type='checkbox' />Remember Me</label>        
           <a href='#'>Forgot Password ?</a>
        </div>
        <button type='submit' className='btn'>Login</button>
         <div className='register'>
            <p>Don't have an Account? <a href='#'>Register</a></p>
         </div>
        </form>

    </div>
  )
}

export default Loginform;