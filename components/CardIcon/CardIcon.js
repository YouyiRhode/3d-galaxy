import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from "./CardIcon.module.scss";


const CardIcon = ({icon,size,btnName,cardInfo}) => {

    return ( 
        <div className={styles.cardwrapper}>
            <div className={styles.cardContainer}>
                <div className={styles.cardImg}>
                    <FontAwesomeIcon icon={icon } size ={size} className={styles.icon} />
                </div> 
                <div className={styles.cardInfo}>{ cardInfo }</div>
                
            </div>
        </div>
     );
}
  
export default CardIcon;