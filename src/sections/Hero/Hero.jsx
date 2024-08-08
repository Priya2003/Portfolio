import styles from './HeroStyles.module.css'
import heroImage from '../../assets/profilepic.png'
import themeIcon from '../../assets/sun.svg';
import twitterIcon from '../../assets/twitter-light.svg';
import githubIcon from '../../assets/github-light.svg';
import linkedinIcon from '../../assets/linkedin-light.svg';
import CV from '../../assets/CV1.pdf';


function Hero() {
  return( <section id="hero">
    <div className={styles.colorModeContainer}>
      <img 
       className = {styles.hero}
       src={heroImage} 
       alt= "Profile Picture of Priya Sharma" />
    
    <img 
    className = {styles.colorMode}
    src={themeIcon}
    alt="Color mode icon"/>
    </div>
    <div className={styles.info}>
      <h1>
        Priya 
        <br/>
        Sharma
      </h1>
      <h2>Full Stack Developer</h2>
      <span>
        <a href="https://twitter.com/" target="_blank">
        <img src={twitterIcon} alt="Twitter Icon"/>
        </a>
        <a href="https://github.com/" target="_blank">
        <img src={githubIcon} alt="Twitter Icon"/>
        </a>
        <a href="https://linkedin.com/" target="_blank">
        <img src={linkedinIcon} alt="Twitter Icon"/>
        </a>
      </span>
      <p>Dedicated full stack developer specializing in building robust, 
        scalable applications from front-end to back-end.</p>
      <a href={CV} download>
        <button className="hover">
          Resume
        </button>
      </a>

 
    </div>
    

    </section>
    
    );
  
}

export default Hero
