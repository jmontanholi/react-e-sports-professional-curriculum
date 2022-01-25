import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import dispatchCompanyLogin from '../store/api_slices/companyLogin_api';
import dispatchUserLogin from '../store/api_slices/userLogin_api';

const UserLoginPage = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [select, setSelect] = useState('')
  const changeEmail = (e) => {
    setEmail(e.target.value)
  }
  const changePassword = (e) => {
    setPassword(e.target.value)
  }
  const changeSelect = (e) => {
    setSelect(e.target.value)
  }
  const dispatchRightMethod = () => {
    if (select === 'user') {
      dispatchUserLogin(dispatch, email, password)
    } else {
      dispatchCompanyLogin(dispatch, email, password)
    }
  }
  return (
    <section>
      <h2>Login</h2>
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
        <div>
          <select name="user_type" id="user_type" onChange={(e) => { changeSelect(e); }}>
            <option value="user">Gamer</option>
            <option value="company">Company</option>
          </select>
        </div>
      </form>
      <button onClick={() => {dispatchRightMethod()}}>Log In</button>
    </section>
  )
}

export default UserLoginPage;
