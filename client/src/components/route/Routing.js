import React from 'react'
import { useSelector } from 'react-redux';

import ReviewForm from '../survey/ReviewForm'
import MapContainer from '../map/MapContainer'
import ClinicsList from '../clinics/ClinicsList'

import LoginForm from '../login/LoginForm'
import StartPage from '../../pages/startpage/StartPage'



export const Routing = () => {
  const accessToken = useSelector(store => store.user.login.accessToken);
  if(accessToken) {
    return (
      <div>
          <ReviewForm />
          <MapContainer />
          {/* <ClinicsList /> */}
      </div>
  
    )} else {
      return <LoginForm />
    }
  }
