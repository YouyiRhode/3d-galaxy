import styles from '../styles/About.module.scss';
import Head from 'next/head';
import Image from 'next/image';
import {faCss3Alt, faFigma, faHtml5, faJsSquare, faReact, faStackOverflow, faTwitter,faFacebook,faInstagram,faGithub, faCss3} from '@fortawesome/free-brands-svg-icons';
import { faAd,faChartLine, faCode,faLaptopCode } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import MyCard from "../components/MyCard/MyCard";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from 'react';



const About = (props) => {

  const AboutMe = {
      title: 'About Me',
      position:'React Web Developer',
      context: "I'm a Web Developer who enjoys problem solving and engineering. I love the feeling after making a complex application and the satisfaction that comes after accomplishing a difficult task. In my spare time I enjoy photography with my DSLR camera and lenses for local events and nature photography. I look forward to getting to know you and working with you."
    }; 
 
    const circleBarOne ={
      size:`8x`,
      btnName:'HTML',
      cardInfo:'HTML5',
      circleSize: 200,
      progress: 98,
      strokeWidth: 14,
      circleOneStroke:'#7ea9e1',
      circleTwoStroke:'#0263e1',
      icon:faHtml5,
      dataAos:'fade-up'
    }
    const circleBarTwo ={
      size:`8x`,
      btnName:'CSS',
      cardInfo:'CSS3',
      circleSize: 200,
      progress: 98,
      strokeWidth: 14,
      circleOneStroke:'#db896b',
      circleTwoStroke:'#db3a00',
      icon:faCss3,
      dataAos:'fade-up'
    }
    const circleBarThree ={
      size:`8x`,
      btnName:'JS',
      cardInfo:'Javascript',
      circleSize: 200,
      progress: 90,
      strokeWidth: 14,
      circleOneStroke:'#925390',
      circleTwoStroke:'#92008d',
      icon:faJsSquare,
      dataAos:'fade-up'
    }
    const circleBarFour ={
      size:`8x`,
      btnName:'React',
      cardInfo:'React',
      circleSize: 200,
      progress: 92,
      strokeWidth: 14,
      circleOneStroke:'#a9aa8b',
      circleTwoStroke:'#a7aa00',
      icon:faReact,
      dataAos:'fade-up'
    }
    const circleBarFive ={
      size:`8x`,
      btnName:'Figma',
      cardInfo:'Figma',
      circleSize: 200,
      progress: 70,
      strokeWidth: 14,
      circleOneStroke:'#0a908e',
      circleTwoStroke:'#3ffffd',
      icon:faFigma,
      dataAos:'fade-up'
    }
    const circleBarSix ={
      size:`8x`,
      btnName:'Photoshop',
      cardInfo:'Photoshop',
      circleSize: 200,
      progress: 80,
      strokeWidth: 14,
      circleOneStroke:'#0a1b2e',
      circleTwoStroke:'#459af9',
      src:"/ps.png",
      dataAos:'fade-up'
    }

    useEffect( () => {
     Aos.init({duration: 2000 });
    }, []);
  
 return (
    <>  
        <Head>
         <title>Vivian | About</title>
        </Head>
        <div className={styles.container}> 
          <div className={styles.banner}>

            <div className={styles.avatar}>

              <div className={styles.avatarSectionLeft}  >
                <Image className ={styles.avatarStyle} src="/Vivian.jpg" alt="Picture of the author" width={200} height={200}></Image>
              </div>

              <div className={styles.avatarSectionRight} data-aos="fade-left">
                  <h2>{AboutMe.title}</h2>
                  <h5>{AboutMe.position}</h5>
                  <p>{AboutMe.context}</p>
              </div>
              
            </div>
          </div> 
          
          <div className={styles.skillContainer}>
              <strong>
                <span>Developing Skills</span>
              </strong>
            <div className={styles.skillSection} >
              <MyCard {...circleBarOne} />
              <MyCard {...circleBarTwo} />
             
            </div>
            <div className={styles.skillSection} >
                <MyCard {...circleBarThree} />
                <MyCard {...circleBarFour} />
            </div>
              <strong>
                <span>Design Skills</span>
              </strong>
            <div className={styles.skillSection}>
             <MyCard {...circleBarFive}/>
             <MyCard {...circleBarSix}/>
            </div>  
              <strong>
                <span>Digital Marketing Skills</span>
              </strong>
         </div>

        </div>
    </>
  )
 
}
export default About;
