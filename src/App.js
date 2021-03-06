import React from 'react';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import Service from './Service';
import { Switch,Route, Redirect } from 'react-router-dom';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import {Navbar} from './Navbar';
import './index.css';
import Footer from './Footer';
import Clock from 'react-digital-clock';
const App=()=>
{
  return(
    <>

    <Navbar/>
   
      <Clock/>
      
    
    <Switch>
    <Route exact path="/" component={Home}/>
    <Route exact path="/about" component={About}/>
    <Route exact path="/service" component={Service}/>
    <Route exact path="/contact" component={Contact}/>
      <Redirect to="/"></Redirect>
      
       </Switch>
       <Footer/>
    </>
  )

  
}

export default App;
