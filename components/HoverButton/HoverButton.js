import styles from './HoverBtn.module.scss';
import React from 'react';
const HoverBtn = ({btnContent,dispatch}) => {
    
    return ( 
        <>
         <button 
            className={styles.myHoverBtn} 
            onClick={()=> dispatch("SHOW_POPUP")}
         >
             {btnContent}
        </button>
        </>
     );
}
 export default React.memo(HoverBtn);