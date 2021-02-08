import React, { useState } from 'react';

import './clinicsCardStyles.css'
// import './clinicsListStyles.css'

const ClinicsList = () => {
  const [clinics, setClinics] = useState([]);
  
  
  fetch("http://localhost:8080/clinics", {
  method: "GET",
  headers: { "Content-Type": "application/json" },
})
  .then(res => res.json())
  .then(data => setClinics(data))
  .catch(err => console.log("error:", err))

  return (
<>
    <div className="card_container" >
      {
    clinics.map(clinic => (
      <div className="card" key={clinic._id}>
        <img src="" alt=""/>
     <h2 className="card__info h2">{clinic.formatted_address}</h2>
     <h4>Rating:{clinic.rating}</h4>
     <h4 className="card__info h4 ">{clinic.formatted_address}</h4>
     <h4 className="card__info h4 ">{clinic.formatted_phone_number}</h4>
     <button>0 Likes</button>
      </div>
     )) 
     };
      </div>
</>
      )
};

export default ClinicsList;


