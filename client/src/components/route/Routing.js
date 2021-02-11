import React from 'react'
import { useSelector } from 'react-redux';

import ReviewForm from '../survey/ReviewForm'
import MapContainer from '../map/MapContainer'
import ClinicsList from '../clinics/ClinicsList'

import LoginForm from '../login/LoginForm'
import StartPage from '../../pages/startpage/StartPage';
import { SearchClinic } from '../search/SearchClinic';
import Profile from '../profile/Profile';





export const Routing = () => {
  const accessToken = useSelector(store => store.user.login.accessToken);
  if(accessToken) {
    return (
      <div>
          <Profile />
      </div>
  
    )} else {
      return <StartPage />
    }
  }
