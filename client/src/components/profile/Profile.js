import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { user } from '../reducers/user'
import  Reviews  from '../survey/testimonials/Reviews'

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
      <div className="container-profile">
        <h2>Profile:</h2>
        <h4>userId:</h4>
        <p> {`${userId}`}</p>
        <p>This is the profile</p>
        <p>{secretMessage}</p>
      <button className="btn-secret" type="submit" onClick={showSecret} value="Secret" />
      <button className="btn-logout" type="submit" onClick={handleLogout} value="Logout" />
      <Reviews />
      </div>
     
  </>
    )
};

export default Profile;