import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import dispatchUserSignUp from '../store/api_slices/userSignup_api';
import dispatchCompanySignUp from '../store/api_slices/companySignUp_api';
import style from '../assets/stylesheets/login.module.scss';
import { GiSwordInStone } from 'react-icons/gi'

const SignUpPage = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [name, setName] = useState('')
  const [age, setAge] = useState(0)
  const [location, setLocation] = useState('')
  const [select, setSelect] = useState('user')
  const changeEmail = (e) => {
    setEmail(e.target.value)
  };
  const changePassword = (e) => {
    setPassword(e.target.value);
  };
  const changeName = (e) => {
    setName(e.target.value);
  };
  const changeLocation = (e) => {
    setLocation(e.target.value);
  };
  const changeAge = (e) => {
    setAge(e.target.value);
  };
  const changeSelect = (e) => {
    setSelect(e.target.value);
    document.getElementById('form').classList.add(style.animation)
    setTimeout(() => {
      document.getElementById('form').classList.remove(style.animation)
    }, 1700);
  };
  const dispatchRightMethod = () => {
    if (select === 'user') {
      dispatchUserSignUp(dispatch, email, password, location, name, parseInt(age))
    } else {
      dispatchCompanySignUp(dispatch, email, password, location, name)
    }
  };
  return (
    <section className={`${style.section} ${select === 'user' ? style.end : style.start}`}>
      <form id='form' className={`${style.form}`}>
        <div className={style.logoDiv}>
          <h1 className={`${style.logo} logoFont`}><GiSwordInStone className={style.icon}/><NavLink to="/">Perspicientia</NavLink></h1>
        </div>
        <h2 className={`${style.title} titleFont`}>Sign Up</h2>
        <div className={`${style.div}`}>
          <label htmlFor="email" className={`${style.label} textFont`}>I'm a</label>
          <select 
            name="user_type" 
            id="user_type" 
            onChange={(e) => { changeSelect(e); }}
            className={`${style.input}`}
          >
            <option value="user">Gamer</option>
            <option value="company">Company</option>
          </select>
        </div>
        <div className={`${style.div}`}>
          <label htmlFor="email">Email</label>
          <input 
            type="email"
            onChange={(e) => { changeEmail(e); }}
            className={`${style.input}`}
          />
        </div>
        <div className={`${style.div}`}>
          <label htmlFor="password">Password</label>
          <input 
            type="password" 
            onChange={(e) => { changePassword(e); }}
            className={`${style.input}`}
          />
        </div>
        {select === 'user' && (
          <div className={`${style.div}`}>
            <label htmlFor="age">Age</label>
            <input 
              type="number" 
              onChange={(e) => { changeAge(e); }}
              className={`${style.input}`}
            />
          </div>
        )}
        <div className={`${style.div}`}>
          <label htmlFor="name">Username</label>
          <input 
            type="text" 
            onChange={(e) => { changeName(e); }}
            className={`${style.input}`}
          />
        </div>
        <div className={`${style.div}`}>
          <label htmlFor="location">Location</label>
          <input 
            type="text" 
            onChange={(e) => { changeLocation(e); }}
            className={`${style.input}`}
          />
        </div>
        <button
            className={`${style.submit} titleFont`} 
            onClick={() => {dispatchRightMethod()}} 
        >
            Sign Up
        </button>
        <button
            className={`${style.submit}`} 
        >
            <NavLink className={` titleFont`} to="/login">
              Log In
            </NavLink>
        </button>
      </form>
      
    </section>
  )
}

export default SignUpPage;
