import Image from 'next/image';
import styles from './PortfolioCard.module.scss';
import ImgPopup from '../ImgPopup/ImgPopup';
import React,{useState,useEffect} from "react";
import Aos from "aos";
import "aos/dist/aos.css";

const PortfolioCard = ({datas}) => {

  const [imgSrc, setImgSrc]= useState('');
  const [isPop, setIsPop] = useState(false);

  const getImage = (image) =>{
    setImgSrc(image);
    setIsPop(true);
  }
  const closeImg = ()=>{
    setIsPop(false);
  }
  useEffect( () => {
    Aos.init({
      duration: 1500
    });
   }, []);
   
  return (
        <>
          <div className={styles.PortfolioCardContainer}>
            {
              datas.map( data => {
                return(
                  <React.Fragment key={data.id}>
                    <div className={styles.displayCard} data-aos="flip-left" data-aos-offset="10" data-aos-once="true" >
                       <div className={styles.imgContainer}>
                          <Image 
                              className ={styles.myImage} 
                              src={data.thumbnail_img_src} 
                              width={200} 
                              height={250}
                              priority={true} 
                              onClick={() =>{getImage(data)}}
                              alt=" "
                          />
                        </div>
                        <h1>{data.websiteName} </h1>
                        <button 
                            className={styles.myHoverBtn} 
                        >
                          <a href={data.url}
                            target="_blank"
                            rel="noreferrer"
                          >
                           view
                          </a>
                        </button>
                        
                    </div>
                  </React.Fragment >
              )})
            }
            <ImgPopup 
                trigger={isPop} 
                closeImg={closeImg} 
                image={imgSrc}
            />
          </div>
        </>
    );
}
 
export default React.memo(PortfolioCard);




