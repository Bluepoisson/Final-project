import React from 'react';
import { wobble } from 'react-animations';
import Radium, {StyleRoot} from 'radium';

import { Header }from '../../components/header/Header'
import illustration from './illustration.svg';
import  './startPageStyles.css';

const styles = {
  wobble: {
    animation: 'x 2s',
    animationName: Radium.keyframes(wobble, 'wobble')
  }
}

 const StartPage = () => {
  return (
    <>
    <StyleRoot>
    <Header className="banner-startpage"/>
    <section className="startpage-container">
     <h1 className="startpage-title" style={styles.wobble}>For <span>healthy</span> choices</h1>
    <img className="startpage-illustration" src={illustration} alt=""/>
    </section>
    </StyleRoot>
   
    </>
  )
}

export default StartPage;