
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from "./MyCard.module.scss";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect,useState} from 'react';
import Image from 'next/image';

    const MyCard = ({icon, size,cardInfo, circleSize, progress, strokeWidth, circleOneStroke, circleTwoStroke,dataAos,src}) => {

    const center = circleSize / 2;
    const radius = circleSize / 2 - strokeWidth / 2;
    const circumference = 2*Math.PI*radius; 
    const offset = ( (100 - progress) / 100)*circumference;

    useEffect( () => {
      Aos.init({duration: 2000 });
    }, []);
    
    const [animateZhouchang, setAnimateZhouchang] = useState(circumference)
    useEffect( () => {
        window.addEventListener('scroll', () => {
            setAnimateZhouchang(offset);
           
        })
        return () =>{
            window.removeEventListener('scroll', () => {
                setAnimateZhouchang(offset);
               
            }) 
        }
    }, [offset]);

        let myImg;
        if(icon){
            myImg = <FontAwesomeIcon icon={icon} size ={size} className={styles.icon} />
        }else{
            myImg =  <div style={{width:"300px",height:"167.9px", position:"relative"}}>
                        <img src={src} alt="photoshop logo" style={{width:"112px" ,height:"auto",margin:'30px 94px'}}></img>
                    </div>
        }

    return ( 
        <div>
            <div className={styles.cardContainer} data-aos={dataAos}>
                <div className='upPart'>
                    <div className={styles.cardwrapper}>
                        <div>
                            <div className={styles.cardImg}>
                                {myImg}
                            </div> 
                        </div>
                    </div>
                </div>
                <div className='downPart'>
                  <div  className={styles.circleBar}>
                    <svg 
                        className={styles.circularChart}
                        width = {circleSize}
                        height = {circleSize}
                    >
                        <circle
                            className={styles.circularBg}
                            stroke={circleOneStroke}
                            cx = {center}
                            cy = {center}
                            r = {radius}
                            strokeWidth = {strokeWidth}
                        ></circle>
                        <circle
                        className={styles.circle}
                        stroke={circleTwoStroke}
                        cx = {center}
                        cy = {center}
                        r = {radius}
                        strokeWidth = {strokeWidth}
                        strokeDasharray = {circumference}
                        strokeDashoffset = {animateZhouchang}
                        
                        
                        style={{transition: 'all 5s ease'}}
                        >
                        </circle>
                        <text
                            x = {center}
                            y = {center}
                            className={styles.percentage}
                        >
                            {progress}%
                        </text>
                    </svg>
                </div>
                  <div className={styles.cardInfo}>{ cardInfo }</div>
                </div>           
            </div>
        </div>
     );
}
 
export default MyCard;

