import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { user } from '../reducers/user'

import ReviewForm from '../survey/ReviewForm';
import { SearchClinic } from '../search/SearchClinic';
import ClinicsList from '../clinics/ClinicsList';
import Nav from '../header/Nav';


import './profileStyles.css';



const Profile = () => {
  
  const dispatch = useDispatch()
  const accessToken = useSelector((store) => store.user.login.accessToken)
  const userId = useSelector((store) => store.user.login.userId)
  const secretMessage = useSelector((store) => store.user.login.secretMessage);
  // const statusMessage = useSelector((store) => store.user.login.statusMessage);

  const PROFILE_URL = `http://localhost:8080/users/${userId}`;
 

  const loginSuccess = (loginResponse) => {
    dispatch(
      user.actions.setStatusMessage({
        statusMessage: loginResponse.statusMessage,
      })
    );
    dispatch(
			user.actions.setSecretMessage({
				secretMessage: loginResponse.secretMessage,
			})
		);
  };

  const loginFailed = (loginError) => {
    dispatch(user.actions.setStatusMessage({ statusMessage: loginError }));
  };

  const handleLogout = () => {
		dispatch(user.actions.logout);
		dispatch(user.actions.toggleLoggedState(false));
		window.location.reload();
	};

  const showSecret = (e) => {
		e.preventDefault();
		fetch(PROFILE_URL, {
			method: 'GET',
			headers: { Authorization: accessToken },
		})
			.then((res) => {
				if (!res.ok) {
					throw new Error('Secret failed');
				}
				return res.json();
			})
			.then((json) => loginSuccess(json))
			.catch((err) => loginFailed(err));
  };
  
  if (!accessToken) {
    return <div className="err-text">Couldn't log in</div>
  } 
  return (
   <>
      <Nav />
      <div className="container-profile">
        <h2>Profile</h2>
        {/* <h4>userId:</h4>
        <p> {`${userId}`}</p>
        <p>Something something</p> */}
        <p>{secretMessage}</p>
      {/* <button className="btn-secret" type="submit" onClick={showSecret} value="Secret">Secret</button> */}
      <button className="btn-logout" type="submit" onClick={handleLogout} value="Logout">Sign out</button>
      <ReviewForm />
      <SearchClinic />
      <ClinicsList />
      </div>
     
  </>
    )
};

export default Profile;