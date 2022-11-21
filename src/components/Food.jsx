import { Link } from "react-router-dom";
import Bollyfirst from "./Bollyfirst";
import Bollysecond from "./Bollysecond";
import { AiOutlineMenu,AiOutlineClose} from "react-icons/ai";
import { useRef ,useState ,useEffect} from "react";
// import { Articles } from "./Articles";



const Food = ()=>{
    const navRef = useRef();

    const showNavbar=()=>{
        navRef.current.classList.toggle("responsive_nav");
    }


  let mainFood = [];
  let mainSixth = []; 

  const [data,setData]=useState([]);
  useEffect(()=>{
    fetch(`https://nodejs-seven-project.herokuapp.com/home/food`)
    .then(res=>res.json())
    .then(data=>{
      setData(data)
     
      
      
   
    })

  },[])
  mainFood = data.filter((item)=>item.category==="mainFood")
  mainSixth = data.filter((item)=>item.category==="mainSixth")

    return(
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
            <div className="article">
            <p className="bolly">Food</p>
            <hr className="hr3"/>
          </div>
          <div className="box">
            <div className="boxright">
                
             {
                 mainFood.map((item4,index4)=>{
                    return(
                        <>
                       <Link to={`/pages/about/${item4.id}`} className="two"><Bollyfirst bollyhead={item4.heading } bollydesc={item4.describe} bollytags={item4.tags} bollyimg={item4.image}/></Link>
                        </>
                    )
                 })
             } 
           

            <div className="more">
                <div className="arrow1">
                </div>
                <div className="arrowtext">
                <p>LOAD MORE</p>
                </div>
            </div>

              
            </div>
            <div className="boxleftbolly">
               
                <div className="post">
                    <p className="bollytoptext">Top Posts</p>
                    <hr className="hr5"/>
                </div>
                <div className="toppost">
                    <Link to={`/pages/about/${67}`}className="two">
                    <div className="food"><br />
                    <h1 className="no1">1</h1>
                    <h3 className="top1text">'Nutrient foods'</h3>
                    <span className="travel">Travel</span>
                    <span className="travel1">/ August 21 2017</span>
                    </div>
                    </Link>
                    <hr className="hr6" />
                    {
                 mainSixth.map((item5,index5)=>{
                    return(
                        <>
                         <Link to={`/pages/about/${item5.id}`} className="two"><Bollysecond secnum={item5.number } sectitle={item5.heading} sectags={item5.tags} secimg={item5.image}/>
                          </Link>
                        </>
                    )
                 })
             } 

                </div>
                <div className="bollyadvert">
                  <p className="adverttext">Advertistement</p>
                </div>
            </div>
         
          </div>
       </div>
    )
}
export default Food;