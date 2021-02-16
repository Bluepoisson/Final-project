
import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useHistory } from "react-router-dom"
import { user } from '../reducers/user'

import { SearchClinic } from '../search/SearchClinic';
import Nav from '../header/Nav';

import './profileStyles.css';

const Profile = () => {
  
  const dispatch = useDispatch()
  const accessToken = useSelector((store) => store.user.login.accessToken)
  const history = useHistory()
  // const userId = useSelector((store) => store.user.login.userId)
  // const secretMessage = useSelector((store) => store.user.login.secretMessage);
  // const statusMessage = useSelector((store) => store.user.login.statusMessage);

  // const PROFILE_URL = `http://localhost:8080/users/${userId}`;

  const loginSuccess = (loginResponse) => {
    dispatch(
      user.actions.setStatusMessage({
        statusMessage: loginResponse.statusMessage,
      }));
  };

  const loginFailed = (loginError) => {
    dispatch(user.actions.setStatusMessage({ statusMessage: loginError }));
  };

  const handleLogout = () => {
		dispatch(user.actions.logout);
		dispatch(user.actions.toggleLoggedState(false));
		window.location.href = '/';
	};

 
  const reDirectReview = () => {
    history.push(`/review`)
  }

  const reDirectClinics = () => {
    history.push(`/clinics`)
  }

  const reDirectMyReviews = () => {
    history.push(`/my_reviews`)
  }

  

  if (!accessToken) {
    return <div className="err-text" value={loginFailed}>Couldn't log in</div>
  } 
  return (
   <>
      <Nav />
      <div className="container-profile">
        <h2>Profile</h2>
         <button className="btn"type="submit" onClick={reDirectClinics} value="Review">Clinics</button>
         <button className="btn"type="submit" onClick={reDirectReview} value="Review">Review</button>
          <button className="btn"type="submit" onClick={reDirectMyReviews} value="Review">My reviews</button>
           <button className="btn-logout" type="submit" onClick={handleLogout} value="Logout">Sign out</button>
      </div>
     
  </>
    )
};

export default Profile;