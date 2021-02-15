import React from 'react';
import { wobble } from 'react-animations';
import Radium, {StyleRoot} from 'radium';

import  Nav from '../../components/header/Nav'
import { Footer} from '../../components/footer/Footer'
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
    <Nav className="banner-startpage"/>
       <section className="startpage-container">
         <h1 className="startpage-title" style={styles.wobble}>for <span>healthy</span> choices</h1>
           <div>
            <p>Looking for a good health care clinic? 
                Log in or signup to check out reviews or write your own</p>
            </div>
             <img className="startpage-illustration" src={illustration} alt=""/>
      </section>
  
    </StyleRoot>
    <Footer />
 
   
    </>
  )
}

export default StartPage;