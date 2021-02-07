import React from 'react';

import './clinicscard.css'

export const ClinicsCard = ({ src, name, rating, formatted_address, formatted_phone_number }) => {
  return (
    <div className="card">
      <img src="" alt=""/>
      <div className="card_info">
        <a href="https://bit.ly/36PkBjU">
        <h2>This is name of clinic</h2>
        <h4>Rating{rating}<span>2,5</span></h4>
        <p>Davidshallstorg 10B{formatted_address}</p>
        <p>+46 40 611 27{formatted_phone_number }</p>
        </a>
        <button>0 Likes</button>
      </div>
    </div>
  )
};
