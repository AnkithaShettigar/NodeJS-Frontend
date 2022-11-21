import React from 'react';
import '../App.css';

 const  Homepage = ({headding,brief,data,backimg}) => {
  return (
    
  <>
    <hr className="hr4"/>
    <div className="block1">
        <div className="manali" style={{backgroundImage:`url(${backimg})`}}/>
        
            
            <div className="manali1">
            <h3 className="text2">{headding}</h3>
                <p className="text21">{brief}</p>
                {data.map((item1,index1)=>{
                    return(
                        <span className="travel" key={index1}>{item1}</span>
                    )
                })}
                
    
       </div>
       </div>

  </>
  )
}
export default Homepage;