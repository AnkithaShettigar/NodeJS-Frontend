import React from 'react';
import '../App.css';

const  Banner = ({title,tag,banimg,className,titleClass}) =>{
  return (
    <div className={className} style={{backgroundImage:`url(${banimg})`}}>
    <h3 className={titleClass ? titleClass : "first"}>{title}</h3>
    <p className="second">{tag}</p>
    </div>
  )
}
export default Banner;
