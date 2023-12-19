import styles from '../styles/Home.module.scss';
import Head from 'next/head';
import Button from '../components/Button/Button';
import HomePageBackground from'../components/HomePageBackground/HomePageBackground';


export default function Home() {
  const info = {
    keywords:'Vivian rhode,web developer,react developer',
    description:'Vivian rhode web developer portfolio website build with reactJS and nextJS',
    author:'Vivian rhode',
    viewport:'width=device-width, initial-scale=1.0'
  }
  
  return (
    <>  
       <Head>
         <title>Vivian | Home</title>
         <meta charSet="UTF-8"/>
         <meta name="keywords" content={info.keywords}/>
         <meta name="description" content={info.description}/>
         <meta name="author" content={info.author}/>
         <meta name="viewport" content={info.viewport}/>
       </Head>
       <div style={{width:'100%', height:'100vh', backgroundColor:'black'}}>
        <HomePageBackground/>
       </div>
    </>
  )
}
