import React from 'react';
import { bounce } from 'react-animations';
import Radium, {StyleRoot} from 'radium';

import svg from './svg.png';
import './headerStyles.css';

const styles = {
  bounce: {
    animation: 'x 1s',
    animationName: Radium.keyframes(bounce, 'bounce')
  }
}

const Nav = () => {


  return (
    <StyleRoot>
  <nav className="nav-container">
  <img className="logo" style={styles.bounce} src={svg} alt="Logo" />
     <h1 className="title">Sick advisor</h1>
        <ul>
          <li>
            <a href="login">Login</a>
          </li>
          <li>
            <a href="map">Map</a>
          </li>
          <li>
            <a href="about">About</a>
          </li>
        </ul>
  </nav>
  </StyleRoot>
  )
}


export default Nav;