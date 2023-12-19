import styles from '../styles/Resume.module.scss'
import MyResume from '../components/MyResume/MyResume';

const Resume = () => {
  return (
    <>  
        <div className={styles.pageContainer}>
    
            <div className={styles.resumeContainer}>
                <MyResume />
            </div>

             <div style={{textAlign: "center", padding:"50px 0", display:'none'}}>
                <button style={{padding: "5px 25px", borderRadius:"10px",marginBottom:'100px'}} >
                     <a href= "../vivianRhode.pdf" download >Download My Resume</a>
                </button>
            </div>

        </div>
    </>
     );
}
 
export default Resume;
