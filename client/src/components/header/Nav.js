import React from 'react';
import { bounce } from 'react-animations';
import Radium, {StyleRoot} from 'radium';

import svg from './svg.png';
import './headerStyles.css';

const animLogo = {
  bounce: {
    animation: 'x 1s',
    animationName: Radium.keyframes(bounce, 'bounce')
  }
}

const Nav = () => {

  return (
    <StyleRoot>

  <nav className="nav-container">
          <div className="leftSide">
            <a href="/">
              <img className="logo" style={animLogo.bounce} src={svg} alt="Logo" />
                </a>
                  <h1 className="title">Sick advisor</h1>
          </div>
          
            <div className="rightSide">
                    <div className="links">
                      <a href="login">Login</a>
                      <a href="map">Map</a>
                      <a href="search">Search</a>
            </div>
        </div>
  </nav>

  </StyleRoot>
  )
}


export default Nav;