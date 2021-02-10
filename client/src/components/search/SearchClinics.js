import React, { useState, useEffect } from 'react';


  export const onSearch = (key, inputValue) => {
    const CLINIC_URL = `http://localhost:8080/clinics?${key}=${inputValue}`;
    //  const [clinicDetails, setClinicDetails] = useState('')
  
  
      fetch(CLINIC_URL, { 
      headers: { "Content-Type": "application/json" }
    })
      .then(res => res.json())
      .then(data => {
        console.log(data);
        console.log(CLINIC_URL);
       return data
      });
  

  }
