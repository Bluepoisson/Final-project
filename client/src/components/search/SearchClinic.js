import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';

import {onSearch} from './SearchClinics'

export const SearchClinic = () => {
  // const { name } = useParams();
  const [search, setSearch] = useState('');
  const [clinicDetails, setClinicDetails] = useState('')

const handleOnSearch = (inputValue) => {
  setSearch()
  setClinicDetails(onSearch('name', inputValue))
}
    return (
      <div>
        <input 
        type="text" 
        id="search" 
        value={search}
        onChange={(e => handleOnSearch(e.target.value))}
        />
        
      </div>
      
     
    )

  }

 
