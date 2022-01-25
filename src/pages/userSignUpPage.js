import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import dispatchUserSignUp from '../store/api_slices/userSignup_api';

const UserSignUpPage = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [name, setName] = useState('')
  const [age, setAge] = useState(0)
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
  const changeAge = (e) => {
    setAge(e.target.value)
  }
  return (
    <section>
      <h2>User Sign Up</h2>
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
          <label htmlFor="age">Age</label>
          <input 
            type="number" 
            onChange={(e) => { changeAge(e); }}
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
      <button onClick={() => {dispatchUserSignUp(dispatch, email, password, location, name, parseInt(age))}}>Sign Up</button>
    </section>
  )
}

export default UserSignUpPage;
