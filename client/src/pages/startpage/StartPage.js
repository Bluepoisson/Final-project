import React from 'react';

import { Header }from '../../components/header/Header'
import illustration from './illustration.svg';
import  './startPageStyles.css';


 const StartPage = () => {
  return (
    <>
    <Header />
    <div className="startpage-container">
     <h1 className="startpage-title">For healthy choices</h1>
    <img className="startpage-illustration" src={illustration} alt=""/>
    </div>

   
    </>
  )
}

export default StartPage;