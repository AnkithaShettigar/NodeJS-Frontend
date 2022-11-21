import React from 'react';
import '../App.css';


 const Bottombox = ({header,description,tag1,tag2,imgurl,imgex}) => {
    return (
  
      <div className="bottomimage">
      <div className="bottomimage1">
          <p className='bottomimage1text'>{header}</p>
          <div className="bottomimage2">
          <img src={imgurl} alt=""  className="bottomimage2" />
          </div>
          <div className="imagtag">
              <h3>{description}</h3>
          </div>
          <div className="bottom3">
          <div className="bottom2">
          <img src={imgex} alt="" />
          </div>
          <div className="bottom2">
          <p className="bottom2text">{tag1}</p>
            <p className="bottom2text1">{tag2}</p>
          </div>
          </div>
      </div>
    </div>
    )
  }
  export default Bottombox;