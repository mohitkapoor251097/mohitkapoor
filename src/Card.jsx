import React from 'react';
import web from "../src/images/Desert.jpg"
import { NavLink } from 'react-router-dom';
import Sdata from './Sdata';
const Card=(props)=>
{

  return(

    <>
   
      
       <div className="col-md-4 col-xl-4 col-sm-4 mx-auto" >
             
    <div className="card mx-auto" >
      <img src={props.imgsrc} alt="mypic" className="card_img"/>
      <div className="card_info">
        <span className="card_category">{props.title}</span>
        <h3 className="card_title">{props.title}</h3>
        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <NavLink to="" class="btn btn-primary">Go somewhere</NavLink> 
       
       
      </div>
    </div>
  </div>
       
       
    
       
    </>


/*
  <>
   
       <div className="row gy-4  ">
       <div className="col-md-4 col-10 " >
       <div className="card text-center ">
  <img src={props.imgsrc} class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">{props.title}</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <NavLink to="" class="btn btn-primary">Go somewhere</NavLink>
  </div>
</div>
       </div>
       </div>
    
       
    </>




*/
  )

  
}

export default Card;
