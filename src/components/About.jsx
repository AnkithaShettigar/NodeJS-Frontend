import React ,{useState , useEffect} from 'react';
import { useParams } from 'react-router-dom';
import { Articles } from './Articles';
import axios from 'axios'
import Bottombox from './Bottombox';
import { bottom } from './Articles';
import { FaFacebookSquare,FaTwitterSquare,FaInstagramSquare ,FaYoutube} from "react-icons/fa";
import { IoIosArrowBack} from "react-icons/io";
import { Link } from 'react-router-dom';


 const About =()=> {
    const URLParams = useParams();
    const params = useParams();
    const [data,setData]=useState([]);
     
    let currentBlog = [];

    useEffect(()=>{
      axios.get(`http://localhost:8080/home/bollywood/${params.id}`)
       .then(res =>{
        console.log(data)
        setData(res.data)
       })
       .catch(err =>{
        console.log(err);
       })
  
    })
    currentBlog = Articles.find(item => item.id === Number(URLParams.id))
  





    const {heading,image,descr} = currentBlog
  return (
    <>
        
      <div className="abt">
      <div className="abt1">
      <span className="cross1">The</span>
      <h1 className="head2">Siren</h1>
      
      
      </div>
      <div className="abt1">
        <p className='get'>Get Started</p>
      </div>
      </div>
      <div className="content">
        <p className='abouttext'>{heading}</p>
        <div className="body">
        <div className='body1'>
        <img src={require('../pics/mask.png')} alt="" className='image1'/>
        <span className='title1'>Dmitry Nozhenko</span><br />
        <span className='title2'>Jan 28,2019 10 min read</span>
        </div>
       
        <div className='body12'>
        <FaFacebookSquare className='body11'/>
        <FaTwitterSquare className='body11'/>
        <FaInstagramSquare className='body11'/>
        <FaYoutube className='body11'/>
        </div>
        </div>

    
        <div className="img2">
        <img src={image} alt="" className='image2'/>
        </div>
        <p className='des'>{descr}</p>

        <p>Let's talk about them</p>
        <div className="img3">
        <img src={require('../pics/SS.png')} alt="" className='image3'/>
        </div>
        <div className='small'>
            <div className="small1">React</div>
            <div className="small1">Javascript</div>
            <div className="small1">Animation</div>
        </div>
        <div className="clap">
            <img src={require('../pics/rythm.png')} alt="" className='image4' />
            <span className='clap2'>9.3K claps</span>
        </div>
        <hr style={{color:"gray"}}/>
        <div className="man">
           <div className="man1">
           <img src={require('../pics/mask.png')} alt="" />
           </div>
            <div className="man2">
            <p className="mantext1">WRITTEN BY</p>
            <p className="mantext2">Dmitry Nozhenko</p>
            <p className="mantext1">Jan 28,2019 10 min read</p>
            </div>
        </div>
        <hr />
      </div>
      <div className="bottombox">
        <h4 className='bottomtext'>More From The Siren</h4>
        <hr className='bottomhr' />
    <div className="bottomdown">
    {
                bottom.map((item7)=>{return( <Bottombox header={item7.header} description={item7.description} tag1={item7.tag1} tag2={item7.tag2} imgurl={item7.background} imgex={item7.imgex}/> )})
            }
    </div>
           
      
      </div>
      <div className="side">
            <div>
            <img src={require('../pics/rythm.png')} alt="" className='sideimg1' />
            <span className='sideclap'>9.3K claps</span>
            </div>
           <div>
           <img src={require('../pics/share.png')} alt="" className='sideimg2' />
            <span className='sideart'>Share this article</span>
           </div>
        </div>
        <div className="backarrow">
          <Link to ='/' className="backarrow1"><IoIosArrowBack/></Link>
        </div>
    </>
  )
}
export default About;