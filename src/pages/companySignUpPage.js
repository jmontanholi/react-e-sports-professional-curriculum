import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import dispatchCompanySignUp from '../store/api_slices/companySignUp_api';

const CompanySignUpPage = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [name, setName] = useState('')
  const [location, setLocation] = useState('')
  const changeEmail = (e) => {
    setEmail(e.target.value)
  }
  const changePassword = (e) => {
    setPassword(e.target.value)
  }
  const changeName = (e) => {
    setName(e.target.value)
  }
  const changeLocation = (e) => {
    setLocation(e.target.value)
  }
  return (
    <section>
      <h2>Company Sign Up</h2>
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
          <label htmlFor="name">Username</label>
          <input 
            type="text" 
            onChange={(e) => { changeName(e); }}
          />
        </div>
        <div>
          <label htmlFor="location">Location</label>
          <input 
            type="text" 
            onChange={(e) => { changeLocation(e); }}
          />
        </div>
      </form>
      <button onClick={() => {dispatchCompanySignUp(dispatch, email, password, location, name)}}>Sign Up</button>
    </section>
  )
}

export default CompanySignUpPage;
