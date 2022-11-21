import React from 'react';
import '../App.css';


 const Bottompage =({titlehead,deschead,taghead})=> {
  return (
   <>
    <div className="bottom1">
                <p className="storie1">{titlehead}</p>
                <p  className="storie2">{deschead}</p>
                {taghead.map((item3,index3)=>{
                    return(
                        <span className="storie3" key={index3}>{item3}</span>
                    )
                })}
                
            </div>
            <hr className='hr10' />
   </>
  )
}
export default Bottompage;