import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faFacebook,faInstagram,faGithub} from '@fortawesome/free-brands-svg-icons';
import styles from './footer.module.scss'

const Footer = ({ ownerName,className }) =>{
    return(
        <> 
           <footer className={styles.footer}>
              
               <div className="copyRight">
                    <p>&#169;{ new Date().getFullYear() } by {ownerName}. All Rights Reserved.</p>
               </div>
           </footer>
        </>
    )
}
export default Footer;


