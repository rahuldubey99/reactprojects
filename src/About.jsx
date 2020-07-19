import React from 'react';
import {NavLink} from 'react-router-dom';
import web from './img/about.jpg';
import Common from './Common.jsx';
const About =()=>{
    return(
        <>
      <Common 
          name="Welcome to about page"
          imgsrc={web}
          visit="/contact"
          btnName="Contact Now"
          
                />
        </>
    )
}
 export default About; 