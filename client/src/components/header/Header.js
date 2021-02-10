import React from 'react';
import { bounce } from 'react-animations';
import Radium, {StyleRoot} from 'radium';
import './headerStyles.css';
import svg from './svg.png';
// import waitroom from './waitroom.png';

const styles = {
  bounce: {
    animation: 'x 5s',
    animationName: Radium.keyframes(bounce, 'bounce')
  }
}
 

export const Header = () => {
  return (
    <StyleRoot>
 <div className="banner" > 
    <img className="logo" style={styles.bounce} src={svg} alt="Logo" />
    
      {/* <img className="banner-img" src={waitroom} alt="illustration"/> */}
   <h1 className="title">Sick advisor</h1>

 </div>
 </StyleRoot>
  )
  }

