import React from 'react';
import { AiOutlineMenu,AiOutlineClose} from "react-icons/ai";
import { useRef } from "react";
import { Link } from 'react-router-dom';

export default function Pagenot() {
    
        const navRef = useRef();
      
        const showNavbar=()=>{
            navRef.current.classList.toggle("responsive_nav");
        }
  return (
    <div>
         <span className="cross">The</span>
          <h1 className="head1">Siren</h1>
           <p className="tool" ref={navRef}>
          <Link to = "/" className="one">Home</Link>
          <Link to = "/bollywood"className="one">Bollywood</Link>
          <Link to = "/technology"className="one">Technology</Link>
          <Link to = "/hollywood"className="one">Hollywood</Link>
          <Link to ="/fitness" className="one">Fitness</Link>
          <Link to="/food"className="one">Food</Link>
          <button className="btn nav-btn nav-close-btn" onClick={showNavbar}>
          <AiOutlineClose/>
          </button>           
          </p>
          <button className="btn nav-btn" onClick={showNavbar}>
          <AiOutlineMenu/>
          </button>
          <hr className="hr1" />
        <h1 className='notfound'>404 Error</h1>
    </div>
  )
}
