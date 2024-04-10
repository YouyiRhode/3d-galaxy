import styles from '../styles/Contact.module.scss';
import Head from 'next/head';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope,faMobileAlt,faMapMarkedAlt } from '@fortawesome/free-solid-svg-icons';
import Form from '../components/Form/Form';

const Contact = () => {
  return (
    <>  
        <Head>
         <title>Vivian | Contact</title>
        </Head>
        {/* banner */}
          <div className={styles.myBanner}>
            <div className={styles.colorLayer}>
              <h1>Contact Me</h1>
            </div>
          </div>
        {/* contact from */}
          <div className={styles.contactInfoContainer}>
                    <div className={styles.infoContainer}>
                        <div className={styles.left}>
                            <h1 className={styles.leftTitle}>Just say Hello !</h1>
                            <p className={styles.leftP}>
                                Let me know more about you !
                            </p>
                            <Form/>
                        </div>

                        <div className={styles.right}>
                                <div className={styles.contactInfo}>
                                    <h1>Contact <br/>
                                        Information
                                    </h1>
                                    <div>
                                        <FontAwesomeIcon className={styles.icons} icon={faEnvelope} size="lg" color="white" fixedWidth/>
                                        <p>vivianrhodee@gmail.com</p>
                                    </div>
                                    <div>
                                        <FontAwesomeIcon className={styles.icons} icon={faMobileAlt}  size="lg"  color="white" fixedWidth/>
                                        <p>(541)-903-1838</p>
                                    </div>
                                    <div>
                                        <FontAwesomeIcon className={styles.icons} icon={faMapMarkedAlt} size="lg" color="white" fixedWidth/>
                                        <p>Springfield MO</p>
                                    </div>
                                </div>

                              
                                <div className={styles.followUs}>
                                    <h1>Follow Me</h1>
                                    <p><a href='https://github.com/vivianrhode'>GitHub</a></p>
                                    <p><a href='https://www.linkedin.com/in/vivian-rhode-933abb188/'>Linkedin</a></p>
                                </div>

                               

                        </div>
                    </div>
                  </div>
                 
        
    </>
     );
}
 
export default Contact;
