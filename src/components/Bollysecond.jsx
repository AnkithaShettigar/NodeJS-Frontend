import React from 'react';
import '../App.css';

 const Bollysecond=({secnum,sectitle,sectags,secimg})=> {
  return (
   <>
    <div className="uri2" style={{backgroundImage:`url(${secimg})`}}/>
    <h1 className="bollytop2no1">{secnum}</h1>
    <h3 className="bollytop2text">{sectitle}</h3>
    {sectags.map((item5,index5)=>{
                    return(
                        <span className="top2travel" key={index5}>{item5}</span>
                    )
                })}

    <hr className="hr7" />
   </>
  )
}
export default Bollysecond;