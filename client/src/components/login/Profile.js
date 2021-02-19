import React /*{ useState, useEffect }*/ from 'react';
import { user } from '../reducers/user';
import { useDispatch, useSelector } from 'react-redux';

import './profileStyles.css';

// const URL = 'http://nadia-examen.se:8080/users';
const SECRET_URL = 'http://localhost:8080/secret';

export const Profile = () => {
  const dispatch = useDispatch();
  const accessToken = useSelector((store) => store.user.login.accessToken);
  const userId = useSelector((store) => store.user.login.userId);
  const secretMessage = useSelector((store) => store.user.login.secretMessage);
  // const statusMessage = useSelector((store) => store.user.login.statusMessage);

  const loginSuccess = (loginResponse) => {
    dispatch(
      user.actions.setStatusMessage({
        statusMessage: loginResponse.secretMessage,
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

  // const testSecret = () => {
  //   const myToken = localStorage.getItem('superToken');
  //   // Include userId in the path
  //   fetch(`${SECRET_URL}`, {
  //     method: 'GET',
  //     // Include the accessToken to get the protected endpoint
  //     headers: { Authorization: myToken },
  //   })
  //     .then((res) => {
  //       if (!res.ok) {
  //         throw 'Profile test failed';
  //       }
  //       return res.json();
  //     })
  //     // SUCCESS: Do something with the information we got back
  //     .then((json) => loginSuccess(json))
  //     .catch((err) => loginFailed(err)); //401
  // };
  // if (!accessToken) {
  //   return <></>;
  // }

  const showSecret = (e) => {
		e.preventDefault();
		fetch(SECRET_URL, {
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
		return <></>;
	}

  return (
    <section class="profile">
      <h2>Profile:</h2>
      <h4>userId:</h4>
      <p> {`${userId}`}</p>
      <h4>accessToken:</h4>
      <p> {`${accessToken}`}</p>
      <input type="submit" onClick={showSecret} value="Test Secret" />
      <p>{secretMessage}</p>
      <input type="submit" onClick={handleLogout} value="Test Logout" />
    </section>
  );
};
export default Profile;