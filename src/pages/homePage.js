import React from 'react'
import style from '../assets/stylesheets/homepage.module.scss'
import { GiSwordInStone } from 'react-icons/gi'

const HomePage = () => (
  <section className={style.homepage}>
    <nav className={style.navbar}>
      <a className={`${style.link} titleFont`} href="a">Home</a>
      <a className={`${style.link} titleFont`} href="a">Login</a>
      <a className={`${style.link} titleFont`} href="a">SignUp</a>
      <a className={`${style.link} titleFont`} href="a">About Us</a>
    </nav> 
    <section className={style.splashSection}>
      <div className={style.logoDiv}>
        <h1 className={`${style.logo} logoFont`}><GiSwordInStone className={style.icon}/>Perspicientia</h1>
      </div>
      <div className={style.textDiv}>
        <div className={style.rgb}/>
        <div className={style.textInner}>
          <p className={`${style.mainText} titleFont`}>Improve your</p>
          <p className={`${style.changeText} titleFont`}>Chances.</p>
          {/* <p className={`${style.changeText} titleFont`}>Game.</p>
          <p className={`${style.changeText} titleFont`}>Perception.</p> */}
        </div>
      </div>
    </section>
  </section>
)

export default HomePage;
