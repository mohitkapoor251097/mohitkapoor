import React from 'react';
import web from "../src/images/Desert.jpg"
import { NavLink } from 'react-router-dom';
const Common=(props)=>
{
  return(
    <>
    <section id="header" className="d-flex align-items-center">
    <div className="container-fluid ">
    <div className='row'>
    <div className='col-10 mx-auto'>
    <div className="row">

    
     <div className="col-sm-6 pt-5 pt-lg-0  d-flex justify-content-center flex-column">
         <h1 className="my-3">{props.name}<strong className="brand-name"> Mohit kapoor</strong></h1>
           <h4 className="my=3">We are the team of talented developer making websites</h4>
     <div className="mt-3">
         <NavLink to={props.visit} className="btn btn-get-started">{props.btname}</NavLink>
     </div>
     </div>

   <div className="col-sm-6  header-img">
      <img src={props.imgsrc} className="img-fluid animated  my-5" alt="home image"/>
   </div>
   </div>
    </div>
    </div>
    </div>

    </section>
       
    </>
  )

  
}

export default Common;
