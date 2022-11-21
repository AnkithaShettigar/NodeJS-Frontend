import React from 'react';
import '../App.css';


export const ImageWithTitle = ({header,description,tags,imgurl}) => {
  return (
    <div className="line2" style={{backgroundImage:`url(${imgurl})`}}>
                <h3 className="linehead">{header}</h3>
                <p className="linehead1">{description}</p>
                {tags.map((item,index)=>{
                    return(
                        <span className="travel" key={index}>{item}</span>

                    )
                })}
    </div>
  )
}
