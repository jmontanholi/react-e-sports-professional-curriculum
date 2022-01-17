import React from 'react'
import style from '../assets/stylesheets/homepage.module.scss'
import { GiSwordInStone } from 'react-icons/gi'
import aboutUsImg from '../assets/images/aboutUs.jpg'
import missionImg from '../assets/images/mission.jpg'
import gamerImg from '../assets/images/whyBecomeGamer.jpg'

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
    <section className={style.informationsDiv}>
      <section className={style.aboutUs}>
        <div>
          <h2 className={`titleFont`}>About Us</h2>
          <p className={`textFont`}>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
              Voluptas beatae corporis nesciunt vel pariatur sapiente ex 
              minus vero architecto, distinctio incidunt mollitia dignissimos 
              dolorem omnis eius soluta odio deleniti amet necessitatibus 
              perspiciatis sed et! Sed voluptas beatae voluptatibus earum. 
              Alias temporibus aliquid architecto, placeat ipsa rem repellat 
              possimus ullam deserunt quisquam fuga laudantium nihil hic 
              expedita enim sed itaque reprehenderit? Voluptates voluptatem autem quod beatae?
          </p>
        </div>
        <img className={style.informationImg} src={aboutUsImg} alt="computer with controllers and user avatar images" />
      </section>
      <section className={style.mission}>
        <img className={`${style.informationImg} ${style.secondImg}`} src={missionImg} alt="computer with controllers and user avatar images" />
        <div>
          <h2 className={`titleFont`}>Our Mission</h2>
          <p className={`textFont`}>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
              Voluptas beatae corporis nesciunt vel pariatur sapiente ex 
              minus vero architecto, distinctio incidunt mollitia dignissimos 
              dolorem omnis eius soluta odio deleniti amet necessitatibus 
              perspiciatis sed et! Sed voluptas beatae voluptatibus earum. 
              Alias temporibus aliquid architecto, placeat ipsa rem repellat 
              possimus ullam deserunt quisquam fuga laudantium nihil hic 
              expedita enim sed itaque reprehenderit? Voluptates voluptatem autem quod beatae?
          </p>
        </div>
      </section>
      <section className={style.gamerInfo}>
        <div>
          <h2 className={`titleFont`}>Why become a gamer</h2>
          <p className={`textFont`}>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
            Voluptas beatae corporis nesciunt vel pariatur sapiente ex 
            minus vero architecto, distinctio incidunt mollitia dignissimos 
            dolorem omnis eius soluta odio deleniti amet necessitatibus 
            perspiciatis sed et! Sed voluptas beatae voluptatibus earum. 
            Alias temporibus aliquid architecto, placeat ipsa rem repellat 
            possimus ullam deserunt quisquam fuga laudantium nihil hic 
            expedita enim sed itaque reprehenderit? Voluptates voluptatem autem quod beatae?
          </p>
        </div>
        <img className={style.informationImg} src={gamerImg} alt="computer with controllers and user avatar images" />
      </section>
      
    </section>
  </section>
)

export default HomePage;
