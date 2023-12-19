import Image from 'next/image';
import styles from './ImgPopup.module.scss';
import Img from 'next/image';
import datas from "../../Json/portfolioCardData.json";
import React from 'react';

const ImgPopup = ({closeImg,image,trigger,title,description}) => {
    return (trigger)?( 
        <> 
          <div className={styles.popupContainer}>
                <div className={styles.popupInner}>
                { image.video_src?  <video width={800} height={600} controls>
                                        <source src={image.video_src} type="video/mp4"></source>
                                    </video>:<Image 
                                                src={image.thumbnail_img_src}
                                                width={image.width}
                                                height={image.height}
                                                layout='fixed'
                                                alt=' '
                                                />
                }
                <svg 
                        onClick={closeImg}
                        width="30" 
                        height="30" 
                        viewBox="0 0 30 30" 
                        fill="none" 
                       
                     >
                        <path fillRule="evenodd" clipRule="evenodd" d="M15 30C23.2843 30 30 23.2843 30 15C30 6.71573 23.2843 0 15 0C6.71573 0 0 6.71573 0 15C0 23.2843 6.71573 30 15 30ZM15 28.5C22.4558 28.5 28.5 22.4558 28.5 15C28.5 7.54416 22.4558 1.5 15 1.5C7.54416 1.5 1.5 7.54416 1.5 15C1.5 22.4558 7.54416 28.5 15 28.5Z" fill="#8C8C8C"/>
                        <path fillRule="evenodd" clipRule="evenodd" d="M20.6245 20.8341C20.3316 21.127 19.9442 21.2144 19.7592 21.0294L9.47746 10.7477C9.29245 10.5627 9.3799 10.1753 9.67279 9.88238V9.88238C9.96569 9.58949 10.3531 9.50204 10.5381 9.68705L20.8198 19.9688C21.0048 20.1538 20.9174 20.5412 20.6245 20.8341V20.8341Z" fill="#8C8C8C"/>
                        <path fillRule="evenodd" clipRule="evenodd" d="M20.407 9.90864C20.6999 10.2015 20.7874 10.589 20.6024 10.774L10.3206 21.0557C10.1356 21.2407 9.74821 21.1532 9.45532 20.8603V20.8603C9.16242 20.5675 9.07497 20.18 9.25999 19.995L19.5417 9.71331C19.7267 9.5283 20.1141 9.61575 20.407 9.90864V9.90864Z" fill="#8C8C8C"/>
                    </svg>
                    <h3>{title}</h3>
                    <p>{description}</p> 
               </div>
          </div>
        </>
     ) : '';
}
export default React.memo(ImgPopup);
