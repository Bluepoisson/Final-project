// import React, { useState } from 'react';
// import { uuid } from 'uuidv4';

// import './searchClinicStyles.css';

// export const SearchClinic = () => {
//   const [clinicDetails, setClinicDetails] = useState([])
//   const [search, setSearch] = useState('')
  
//   const onSearch = () => {
//     const CLINIC_URL = `http://localhost:8080/clinics?name=${search}`;

//     fetch(CLINIC_URL, { 
//       method: 'GET',
//       headers: { "Content-Type": "application/json" }
//     })
//       .then(res => res.json())
//       .then(data => {
//      setClinicDetails(data)
//         console.log(data)
//       })
//       .catch(err => console.log("Caught an error:", err))
//       ;
//   }

//   const submitSearch = (e) => {
//     e.preventDefault();
//     onSearch();
    
//   }

//   return (
  
//     <form className="search-container" onSubmit={submitSearch}>
//       <input 
//         value={search}
//         type="text" 
//         id="search" 
//         name="search"
//         placeholder="Search..."
//         onChange={(e) => setSearch(e.target.value)}
//       />
//       <input className="submit-btn" type="submit" value="Search" />
//       {clinicDetails && clinicDetails.map(clinic => (
//         // <p>{clinic.name}</p>
//         <ul className="clinic-search">
//         <li key={uuid}>{clinic.name}</li>
        
//         </ul>
//       ))}
//     </form>
  
//   )
// }