import React from 'react';
import {NavLink} from 'react-router-dom';
import web from './img/home.jpg';
import Common from './Common.jsx';
const Home =()=>{
    return(
        <>
     <Common 
          name="Grow your buisness with "
          imgsrc={web}
          visit="/service"
          btnName="Get Started"
      />
        </>
    )
}
 export default Home; 