import React, { useState, useEffect } from 'react';

import './clinicsListStyles.css'

const ClinicsList = () => {
  const [clinics, setClinics] = useState([]);
  
  useEffect(() => {
  fetch("http://localhost:8080/clinics", {
  method: "GET",
  headers: { "Content-Type": "application/json" },
})
  .then(res => res.json())
  .then(data => setClinics(data))
  .catch(err => console.log("error:", err))
}, [])

  return (
<>
    <div className="container_clinics_list" >
      { clinics.map(clinic => (
      <div className="card " key={clinic._id}>
          <a href="https://bit.ly/36PkBjU">
            <h2 className="card__info h2">{clinic.name}</h2>
              <h3>Rating:{clinic.rating}</h3>
                <h4 className="card__info h4 ">{clinic.formatted_address}</h4>
                <h4 className="card__info h4 ">{clinic.formatted_phone_number}</h4>
                <h4>Opening hours:{clinic.opening_hours}</h4>
                  <button>0 Likes</button>
          </a>
      </div>
     )) 
     };
    </div>
</>
      )
};

export default ClinicsList;


