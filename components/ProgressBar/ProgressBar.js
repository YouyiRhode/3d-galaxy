import styles from './ProgressBar.module.scss';

const ProgressBar = ({width, percentage}) => {
    return (
        <>
        <div className={styles.loadbarContainer}>
            <div className={styles.loadbar}>
                <div className={styles.progressive} style={{'width': width}}></div>
                
            </div>
            <div className={styles.percentageContainer}>{percentage}</div>
         </div>
        </>
     );
}
 
export default ProgressBar;
