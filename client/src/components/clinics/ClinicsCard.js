import React from 'react';

import './clinicsCardStyles.css'

// import ClinicsList from './ClinicsList'

//? Rating 
const getStars = () => {
  const stars = [];
  const rating = Math.floor(clinic.rating);

  for (let i = 1; i <= 5; i++) {
    if (i <= rating) {
      stars.push(<img alt='star' key={i} src={starFull}></img>)
    } else {
      stars.push(<img alt='star' key={i} src={starEmpty}></img>)
    }
  }
  return stars;
};

export const ClinicsCard = ({  }) => {
  return (
    <div className="card">
      { }
      <img src="" alt=""/>
      <div className="card_info">
        <a href="https://bit.ly/36PkBjU">
        <h2>This is name of clinic</h2>
        //! CONST RATING
        <h4>Rating{getStars}<span>2,5</span></h4>
        <p>Davidshallstorg 10B{}</p>
        <p>+46 40 611 27{}</p>
        </a>
        {/* <button>0 Likes</button> */}
      </div>
    </div>
  )
};
