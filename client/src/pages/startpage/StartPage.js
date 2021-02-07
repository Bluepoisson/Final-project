import React from 'react';

import { Header }from '../../components/header/Header'
import illustration from './illustration.svg';
import  './startPageStyles.css';



 const StartPage = () => {
  return (
    <>
    <Header className="banner-startpage"/>
    <section className="startpage-container">
     <h1 className="startpage-title">For healthy choices</h1>
    <img className="startpage-illustration" src={illustration} alt=""/>
    </section>

   
    </>
  )
}

export default StartPage;