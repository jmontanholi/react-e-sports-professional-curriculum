import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import dispatchCompanyLogin from '../store/api_slices/companyLogin_api';
import dispatchUserLogin from '../store/api_slices/userLogin_api';
import style from '../assets/stylesheets/login.module.scss';
import { GiSwordInStone } from 'react-icons/gi'

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
    <section className={`${style.section}`}>
      <form className={`${style.form}`}>
        <div className={style.logoDiv}>
          <h1 className={`${style.logo} logoFont`}><GiSwordInStone className={style.icon}/><NavLink to="/">Perspicientia</NavLink></h1>
        </div>
        <h2 className={`${style.title} titleFont`}>Login</h2>
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
          <label htmlFor="email" className={`${style.label} textFont`}>Email</label>
          <input
            placeholder='example@gmail.com'
            className={`${style.input}`}
            type="email"
            onChange={(e) => { changeEmail(e); }}  
          />
        </div>
        <div className={`${style.div}`}>
          <label htmlFor="password" className={`${style.label} textFont`}>Password</label>
          <input
            className={`${style.input}`}
            type="password" 
            onChange={(e) => { changePassword(e); }}
          />
        </div>
        <button
        className={`${style.submit}`} 
        onClick={() => {dispatchRightMethod()}} 
        >
          Log In
        </button>
      </form>
    </section>
  )
}

export default UserLoginPage;
