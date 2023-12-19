import styles from '../styles/Portfolio.module.scss';
import PortfolioCard from '../components/PortfolioCard/PortfolioCard';
import datas from "../Json/portfolioCardData.json";
import React,{useReducer} from 'react';


const initialState =  datas
const reduce = (state, action)=>{
  switch(action){
    case 'All':
      return initialState 
    case 'WEB_DEVELOPMENT':
      return  state = datas.filter(data => data.title == "web development");
    case 'GRAPHIC_DESIGN':
      return state = datas.filter(data => data.title == "Graphic Design");
    case 'VIDEO_EDITING':
      return state = datas.filter(data => data.title == "Video Editing");
    case 'PHOTO_EDITING':
      return state = datas.filter(data => data.title == "Photo Editing");
    default:
      return initialState 
  }
}


const Portfolio = () => {
 const [state, dispatch]= useReducer(reduce,initialState);

    return ( 
    <>
     <div className={styles.portfolioCotainer}>

        <div className={styles.myDisplay}>
          <PortfolioCard datas={state}/>
        </div>
     </div>
    </>
   );
}
export default React.memo(Portfolio);




