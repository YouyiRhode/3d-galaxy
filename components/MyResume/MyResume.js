import Image from 'next/image';
import styles from './MyResume.module.scss'
import { FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faFacebookMessenger} from '@fortawesome/free-brands-svg-icons';
import {faLocationArrow, faPhone,faMouse} from '@fortawesome/free-solid-svg-icons';
import ProgressBar from '../ProgressBar/ProgressBar';
import skills from '../../Json/skills.json'
const MyResume = () => {
    return ( 
        <>
           <div className={ styles.pageContainer}>
               <div  className={ styles.resumeHeader} >
                    <div className={ styles.beforeImage}></div>
                    <div className={ styles.infoContainer}>
                        <h2>Vivian Rhode</h2>
                        <h3>Front End Developer</h3>

                        <div className={ styles.infoleft}>
                            <p className={ styles.addressOne}> 
                                 <FontAwesomeIcon icon={faLocationArrow} />
                            </p>
                            <p className={ styles.myInfo}>  
                                Springfield Mo
                            </p>
                            <p className={ styles.address}> 
                                 <FontAwesomeIcon icon={faLocationArrow} />
                            </p>
                           <div>
                                <p className={ styles.phoneOne}>
                                    <FontAwesomeIcon icon={faPhone} />
                                </p>
                                <p className={ styles.myInfo} > 
                                    <a href="tel:(541)-903-1838" style={{color:"white"}}>(541)-903-1838</a>
                                </p>
                                <p className={styles.phone}>
                                    <FontAwesomeIcon icon={faPhone} />
                                </p>
                            </div>
                        </div>
                        <div  className={ styles.infoRight}>
                            <p className={ styles.email}>
                               <FontAwesomeIcon icon={faFacebookMessenger} /> 
                            </p>
                            <p className={ styles.myInfo}>
                                vivianrhode@gmail.com
                            </p>
                            <p className={ styles.website}>
                               <FontAwesomeIcon icon={faMouse} />
                            </p>
                            <p className={ styles.myInfo}>
                                www.vivianrhode.com
                            </p>
                        </div>
                        
                    </div>
                    <Image className={ styles.image} src="/Vivian.jpg" alt="Picture of the author" width={200} height={200}></Image>
               </div>

               <div  className={ styles.resumeContent} >
                    <div className={ styles.workExprience}>
                        <h1>My Work Exprience</h1>
                        <div className={styles.workExprienceSection}>
                            <div className={styles.contentLeft}>
                                <div>
                                    <h3>My Portfolio Website</h3>
                                    <p><a href='vivianrhode.com'>vivianrhode.com</a></p>
                                    <p> 
                                        I built my own portfolio website using React and NextJS. I’ve learned how to use React
                                        hooks and state management. For NextJS I’ve learned how to use the Next router, link and
                                        image optimization. I learnt how to use the React framework NextJS to build a static
                                        website. 
                                    </p>
                                </div>
                                <div>
                                    <h3>Movie Search React APP</h3>
                                    <p><a href='https://movie-search-youyirhode.vercel.app/'>movie-search-youyirhode.vercel.app</a></p>
                                    <p>
                                        I made a movie search react web app based on actor’s names and you also can filter the
                                        same movies based on actors’ names. I store the client’s request in the state and use
                                        fetching to send it to the movie database. After I get the response, I put the data in the
                                        client’s localStorage. After the client adds a new actor and wants to know if the two actors
                                        have acted in the same movie, I can use the new return data to compare the old data which
                                        I save in client’s localStorage.
                                    </p>
                                </div>
                            </div>
                            
                        </div>
                    </div>

                    <div className={ styles.eduAndSkillsContainer} >
                            <div className={ styles.educationInfo} >
                                <div>
                                    <h1>Education</h1>
                                </div>
                                <div>
                                    <h3>TOP Vocational Institute of Information Technology</h3>
                                    <p>2009 - 2012, Sichuan China</p>
                                    <p>
                                        I went to Sichuan TOP Vocational Institute of Information Technology to study business
                                        English for 3 years. I learnt marketing, financial, global business law, importing and
                                        exporting. 
                                    </p>
                                </div>
                                <div>
                                    <h3>Self-Learning</h3>
                                    <p>2012 - present</p>
                                    <p>
                                        I love coding, because I love problem solving and engineering, it feels nice when I engineer
                                        something complex from the ground up. I am self-taught since learning material for
                                        programming is readily available online. 
                                    </p>
                                </div>

                            </div>

                            <div className={ styles.skills} >
                                <div>
                                    <h1>Skills</h1>
                                </div>
                                <div>
                                    <ul>
                                       {skills.map(skill =>{
                                            return(
                                                <li key={skill.key}>{skill.name}
                                                    <ProgressBar width={skill.width}  percentage={skill.width}/>
                                                </li>
                                        )
                                        })}
                                    </ul>
                                </div>
                            </div>
                    </div>

                    <div className={ styles.sectionThree}>
                        <div>
                            <h1>Professional Objective</h1>
                            <div>
                                <p>
                                    Currently, I am focused on honing my front-end skills, particularly in React, while also seeking opportunities to expand my knowledge in backend development.
                                    My goal is to ultimately become a well-rounded full-stack developer.  To date, I have successfully developed websites and web apps, which serve as a testament to my growing expertise.  
                                    I am looking for a front-end/react developer job right now.
                                </p>
                            </div>
                        </div>
                    </div>
               </div>
           </div>
        </>
     );
}
 
export default MyResume;
