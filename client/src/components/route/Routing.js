import React from 'react'
import { useSelector } from 'react-redux';

import ReviewForm from '../survey/ReviewForm'
import MapContainer from '../map/MapContainer'
import ClinicsList from '../clinics/ClinicsList'

import LoginForm from '../login/LoginForm'



export const Routing = () => {
  const accessToken = useSelector(store => store.user.login.accessToken);
  return (
    <div>
      {accessToken && (
	    <>
      <ReviewForm />
      <MapContainer />
      <ClinicsList />
</>
	  )}
	  {!accessToken && (

       <LoginForm />
   
    )}
    </div>
  )
}
