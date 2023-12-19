import styles from "./FilterHeader.module.scss"

const FilterHeader = ({dispatch}) => {
    return ( 
        <>
            <div className={styles.myFilter}> 
                <button onClick={()=>dispatch('All')}>All</button>
                <button onClick={()=>dispatch('WEB_DEVELOPMENT')}>Web Development</button>
                <button onClick={()=>dispatch('GRAPHIC_DESIGN')}>Graphic Design</button>
                <button onClick={()=>dispatch('VIDEO_EDITING')}>Video Editing</button>
                <button onClick={()=>dispatch('PHOTO_EDITING')}>Photo Editing</button>
            </div>
        </>
     );
}
 
export default FilterHeader;


