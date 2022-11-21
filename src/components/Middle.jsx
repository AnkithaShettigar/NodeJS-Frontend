import React from 'react';
import '../App.css';


 const Middle = ({number,toptext,textimg,midtext}) => {
  return (
    <>
    <div className="top2" style={{backgroundImage:`url(${textimg})`}}/>
                    <h1 className="top2no1">{number}</h1>
                    <h3 className="top2text">{toptext}</h3>
                    {midtext.map((item2,index2)=>{
                    return(
                        <span className="top2travel" key={index2}>{item2}</span>
                    )
                    })}
                    <hr className="hr7" />
    </>
  )
}
export default Middle;
