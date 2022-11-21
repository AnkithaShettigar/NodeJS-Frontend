import React from 'react';
import '../App.css';

const Bollyfirst=({bollyhead,bollydesc,bollytags,bollyimg}) =>{
  return (
  <>
    <div className="blockz">
    <div className="bollywood1"  style={{backgroundImage:`url(${bollyimg})`}}/>
    <div className="manali1">
    <h3 className="dilip1">{bollyhead}</h3>
        <p className="dilip2">{bollydesc}</p>
        {bollytags.map((item4,index4)=>{
                    return(
                        <span className="travel" key={index4}>{item4}</span>
                    )
                })}
    </div>
    </div>   
    <hr className="hr47"/>
  </>
  )
}
export default Bollyfirst;