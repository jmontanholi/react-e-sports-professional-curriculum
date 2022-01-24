import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import dispatchUserLogin from '../store/api_slices/login_api';

const LoginPage = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const changeEmail = (e) => {
    setEmail(e.target.value)
  }
  const changePassword = (e) => {
    setPassword(e.target.value)
  }
  return (
    <section>
      <form>
        <div>
          <label htmlFor="email">Email</label>
          <input 
            type="email"
            onChange={(e) => { changeEmail(e); }}  
          />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input 
            type="password" 
            onChange={(e) => { changePassword(e); }}
          />
        </div>

      </form>
      <button onClick={() => {dispatchUserLogin(dispatch, email, password)}}>Log In</button>
    </section>
  )
}

export default LoginPage;
