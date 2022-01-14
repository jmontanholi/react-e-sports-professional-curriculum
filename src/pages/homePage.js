import React from 'react'
import style from '../assets/stylesheets/homepage.module.scss'

const HomePage = () => (
  <section className={style.homepage}>
    <nav className={style.navbar}>
      <a className={style.link} href="a">Link1</a>
      <a className={style.link} href="a">Link2</a>
      <a className={style.link} href="a">Link3</a>
    </nav>
    <section className={style.splashSection}>
      <div className={style.logoDiv}>
        <h1 className={`${style.logo} logoFont`}>Perspicientia</h1>
      </div>
      <div className={style.textDiv}>
        <div className={style.rgb}/>
        <p className={`${style.mainText} titleFont`}>Improve your</p>
        <p className={`${style.changeText} titleFont`} titleFont>Chances.</p>
        <p className={`${style.changeText} titleFont`}>Game.</p>
        <p className={`${style.changeText} titleFont`}>Perception.</p>
      </div>
    </section>
  </section>
)

export default HomePage;
