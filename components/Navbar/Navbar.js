import Link from 'next/link';
import styles from './NavBar.module.scss'
import MobileMenu from '../MobileMenu/MobileMenu';
import {useState } from 'react';

const NavBar = ({titles,ownerName}) =>{

    const [display, setDisplay] = useState('none');

    const handleClick = () => {
        setDisplay('block')
    }
    const closeClick = () => {
        setDisplay('none')
    }
    
    const handleLinkClick = (e) =>{
      if(e.currentTarget.href){
        setDisplay('none')
      }
    }
   
    
    return(
        <>
            <nav className={styles.navContainer}>
                <div className={styles.navInner}>
                    <div className={styles.logo}>
                        <h1>{ownerName}</h1>
                    </div>
                    
                    <div className={styles.navbar}>
                        <Link legacyBehavior href='/' key="home" ><a>Home</a></Link>
                        {titles.map( title => <Link legacyBehavior href={`/${title}`} key={title}><a>{title}</a></Link> )}
                    </div>
                    <svg 
                        onClick={handleClick}
                        className={styles.mobileMenuIcon}
                        width="40" 
                        height="40" 
                        viewBox="0 0 30 30" 
                        fill="none" 
                    >
                        <path fillRule="evenodd" clipRule="evenodd" d="M10 8C9.44772 8 9 8.44772 9 9C9 9.55228 9.44772 10 10 10H23C23.5523 10 24 9.55228 24 9C24 8.44772 23.5523 8 23 8H10Z" fill="#8c8c8c"/>
                        <path fillRule="evenodd" clipRule="evenodd" d="M6 14C5.44772 14 5 14.4477 5 15C5 15.5523 5.44771 16 6 16H23C23.5523 16 24 15.5523 24 15C24 14.4477 23.5523 14 23 14H6Z" fill="#8c8c8c"/>
                        <path fillRule="evenodd" clipRule="evenodd" d="M13 20C12.4477 20 12 20.4477 12 21C12 21.5523 12.4477 22 13 22H23C23.5523 22 24 21.5523 24 21C24 20.4477 23.5523 20 23 20H13Z" fill="#8c8c8c"/>
                    </svg>

                   <MobileMenu display={display} closeClick ={closeClick} titles={titles} handleLinkClick={handleLinkClick}/>
                </div>
            </nav>
           
        </>
)}
export default NavBar;
