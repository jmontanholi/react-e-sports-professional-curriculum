import React, { useEffect } from 'react';
import { NavLink } from "react-router-dom";
import style from '../assets/stylesheets/homepage.module.scss';
import { GiSwordInStone } from 'react-icons/gi';
import { AiFillGithub, AiFillLinkedin, AiOutlineMail } from 'react-icons/ai';
import aboutUsImg from '../assets/images/aboutUs.jpg';
import missionImg from '../assets/images/mission.jpg';
import gamerImg from '../assets/images/whyBecomeGamer.jpg';

const HomePage = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        const square = entry.target;
        if (entry.isIntersecting && square.classList.contains(style.mission)) {
          square.classList.add(style.slideRight);
          return;
        }
        
        if (entry.isIntersecting) {
          square.classList.add(style.slideLeft);
          return;
        }
        square.classList.remove(style.slideLeft);
        square.classList.remove(style.slideRight);
      });
    });
    const aboutUs = document.querySelector(`.${style.aboutUs}`);
    const gamerInfo = document.getElementsByClassName(style.gamerInfo);
    const mission = document.querySelector(`.${style.mission}`)
    observer.observe(aboutUs);
    observer.observe(gamerInfo[0])
    observer.observe(mission);
  })
  
  const showSubNav = () => {
    const smallDiv = document.querySelector(`.${style.smallLinksDiv}`)
    const homeBtn = document.querySelector(`.${style.homeBtn}`)
    if (smallDiv.classList.contains(style.displayFlex)) {
      smallDiv.classList.remove(style.displayFlex)
      smallDiv.classList.add(style.displayNone)
      homeBtn.classList.remove(style.fallBack)
    } else {
      smallDiv.classList.remove(style.displayNone)
      smallDiv.classList.add(style.displayFlex)
      homeBtn.classList.add(style.fallBack)
    }
    

  }

  return (
    <section className={style.homepage}>
      <nav className={style.navbar}>
        <button
          type='button' 
          className={`${style.link} 
          ${style.homeBtn} titleFont`}
          onClick={() => {
            showSubNav()
          }}
        >
          Home Menu
        </button>
        <div className={`${style.smallLinksDiv} ${style.displayNone}`}>
          <a className={`${style.link} titleFont`} href="#logo">Start</a>
          <a className={`${style.link} titleFont`} href="#aboutUs">About Us</a>
          <a className={`${style.link} titleFont`} href="#mission">Our Mission</a>
          <a className={`${style.link} titleFont`} href="#gamerInfo">Why Become a Gamer</a>
        </div>
        <NavLink className={`${style.link} titleFont`} to="/login">Login</NavLink>
        <NavLink className={`${style.link} titleFont`} to="/sign_up">SignUp</NavLink>
      </nav> 
      <section id='logo' className={style.splashSection}>
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
        <section id='aboutUs' className={style.aboutUs}>
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
        <section id='mission' className={style.mission}>
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
        <section id='gamerInfo' className={style.gamerInfo}>
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
          <img className={`${style.informationImg} gamerImg`} src={gamerImg} alt="computer with controllers and user avatar images" />
        </section>
      </section>
      <footer className={`${style.footer} titleFont`}>      
        <div className={style.footerDiv}>
            <div>
              <p>Guilherme Giachellin</p>
              <div className={style.socialDiv}>
                <a href='https://github.com/GuilhermeGiachellin'><AiFillGithub className={style.socialIcons}/></a>
                <a className={style.linkedin} href='https://www.linkedin.com/in/guilherme-giachellin-2599771b9/'><AiFillLinkedin className={`${style.socialIcons}`}/></a>
                <a className={style.email} href='mailto:guilherme.giache@gmail.com'><AiOutlineMail className={`${style.socialIcons}`}/></a>
              </div>
            </div>
        </div>
        <div className={style.footerDiv}>
            <div>
              <p>João Montanholi</p>
              <div className={style.socialDiv}>
                <a href='https://github.com/jmontanholi'><AiFillGithub className={style.socialIcons} /></a>
                <a className={style.linkedin} href='https://www.linkedin.com/in/joaovitormontanholi/'><AiFillLinkedin className={`${style.socialIcons}`} /></a>
                <a className={style.email} href='mailto:jonunes9326@hotmail.com.br'><AiOutlineMail className={`${style.socialIcons}`} /></a>
              </div>
            </div>
        </div>
      </footer>
    </section>
  )
}

export default HomePage;
