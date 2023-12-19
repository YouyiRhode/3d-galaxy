import datas from "./portfolioCardData.json";

const TagLists = () => {
    
    const myTages = datas.map( data => {
        let arr = data.tags;
        for(let i = 0 ;i < arr.length; i++){
            return arr[i]
        }
    });

    
    console.log( myTages)
    return ( 
        <>
            {
                 myTages.map(tage=>{
                    return(
                        <> 
                             <li>{tage}</li>
                        </>
                    )
                })
            }
         </>
       
     );
}
 
export default TagLists;