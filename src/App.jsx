import React, { useState } from 'react'; 
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/js/dist/dropdown"
import Home from "./Home";
import Contact from './Contact';
import Service from './Service';
import About from './About';
import Navbar from './Navbar';
import {Switch , Route, Redirect} from "react-router-dom"
const App = () => {
    
    return (
        <>
     <Navbar/>
     <Switch>
     <Route exact path="/" component={Home}/>
     <Route exact path="/contact" component={Contact}/> 
     <Route exact path="/about" component={About}/>
     <Route exact path="/service" component={Service}/>
     <Redirect  to="/"/>

     </Switch>
        </>
    )
}
export default App;