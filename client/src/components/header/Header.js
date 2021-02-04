import React from 'react';
import './headerStyles.css';
import svg from './svg.png';
// import waitroom from './waitroom.png';



export const Header = () => {
  return (
 <div className="banner"> 
    <img className="logo" src={svg} alt="Logo"/>
      {/* <img className="banner-img" src={waitroom} alt="illustration"/> */}
   <h1 className="title">Sick advisor</h1>
   

 </div>
  )
  }

