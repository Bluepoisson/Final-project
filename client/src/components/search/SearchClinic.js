import React, { useState, useEffect } from 'react';

export const SearchClinic = () => {
  const [clinicDetails, setClinicDetails] = useState('')

  const onSearch = (key, inputValue) => {
    const CLINIC_URL = `http://localhost:8080/clinics?${key}=${inputValue}`;

    fetch(CLINIC_URL, { 
      method: 'GET',
      headers: { "Content-Type": "application/json" }
    })
      .then(res => res.json())
      .then(data => setClinicDetails(data))
      .catch(err => console.log("Caught an error:", err))
      ;
  }

  const submitSearch = (e) => {
    e.preventDefault();

    onSearch('name', e.target.form.search.value);
  }

  return (
    <form>
      <input 
        type="text" 
        id="search" 
        name="search"
        placeholder="Search"
        onChange={((e) => e)}
      />
      <input type="submit" onClick={submitSearch} value="Search" />
      {clinicDetails && clinicDetails.map(clinic => (
        <p>{clinic.name}</p>
      ))}
    </form>
  )
}

 
