import React, { useState } from 'react';
import { uuid } from 'uuidv4';

import Nav from '../header/Nav'
import './searchClinicStyles.css';

export const SearchClinic = () => {
  const [clinicDetails, setClinicDetails] = useState([])
  const [search, setSearch] = useState('')
  
  const onSearch = () => {
    const CLINIC_URL =`https://sick-project.herokuapp.com/clinics?name=${search}`;
    // `http://localhost:8080/clinics?name=${search}`;
    
    fetch(CLINIC_URL, { 
      method: 'GET',
      headers: { "Content-Type": "application/json" }
    })
      .then(res => res.json())
      .then(data => {
     setClinicDetails(data)
        console.log(data)
      })
      .catch(err => console.log("Caught an error:", err))
      ;
  }

  const submitSearch = (e) => {
    e.preventDefault();
    onSearch();
  }

  return (
    <>
      <Nav />
    <form className="search-container" onSubmit={submitSearch}>
      <input 
        value={search}
        type="text" 
        id="search" 
        name="search"
        placeholder="Search..."
        onChange={(e) => setSearch(e.target.value)}
      />
      <input className="submit-btn" type="submit" value="Search" />
      {clinicDetails && clinicDetails.map(clinic => (
        // <p>{clinic.name}</p>
        <div className="search-output">
        <p key={uuid}>{clinic.name}</p>
        
        </div>
      ))}
    </form>
  </>
  )
}

export default SearchClinic;