import React, { useEffect, useState  } from 'react';
import { Link, useParams } from 'react-router-dom';

import  './clinicsListStyles.css';

const ClinicsList = () => {
  const { place_id } = useParams();
  const API_KEY = 'AIzaSyAHKF6kjlGxaNdFBoFBbZNE-JzeBPfXzZU';
  const PLACES_DETAILS_URL = `https://maps.googleapis.com/maps/api/place/details/json?place_id= ChIJWyIWZUOhU0YRS4dFTpTw_Fo&fields=name,rating,formatted_address,formatted_phone_number,opening_hours&key=${API_KEY}`


  const [clinicsList, setClinicsList] = useState([]);  // stores clinicList

  useEffect(() => {
    fetch("https://cors-anywhere.herokuapp.com/" + PLACES_DETAILS_URL) 
      .then(res => res.json())
      // .then(data => { console.log(data); return data; })
      .then(data => {
        setClinicsList([data.result]) //get list of clinics frm api and put data in state 
      })
      .catch((err) => console.log("Can’t access the darned response. Blocked by browser?", err))
    }, [PLACES_DETAILS_URL, place_id]);

  return (
    <>
    <div className="container_clinics_list">
      {clinicsList.map(({name, formatted_address, formatted_phone_number, rating}) => (
        <div key={name} className="clinic_wrapper">
          {/* <Link key={place_id} to={`clinics/${place_id}`}> */}
              <div className="clinics_details">
                <h1>{name}</h1>
                <p>Rating {rating}</p>
                <p>{formatted_address}</p>
                <p>{formatted_phone_number}</p>
              </div>
          {/* </Link> */}
        </div>
          ))}
    </div>
    </>
  )

};

export default ClinicsList;