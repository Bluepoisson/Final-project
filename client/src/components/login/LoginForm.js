import React, { useState } from 'react';
import { useHistory, Link } from "react-router-dom"
// import Profile from './Profile';
import { useDispatch, useSelector } from 'react-redux';
import { user } from '../reducers/user';
import './loginFormStyles.css';

// import waitroom from './waitroom.png';
import Nav from '../header/Nav';
import Profile from './../profile/Profile';
import BackArrow from '../lib/BackArrow';


// const SIGNUP_URL = 'http://localhost:8080/users';
const LOGIN_URL = 'http://localhost:8080/sessions';


export const LoginForm = () => {
  const dispatch = useDispatch();
  const accessToken = useSelector((store) => store.user.login.accessToken);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState("")
  const history = useHistory()

  const handleLoginSuccess = (loginResponse) => {
    localStorage.setItem('superToken', loginResponse.accessToken);
    dispatch(
      user.actions.setAccessToken({ accessToken: loginResponse.accessToken })
    );
    dispatch(user.actions.setUserId({ userId: loginResponse.userId }));
    dispatch(user.actions.setStatusMessage({ statusMessage: 'Login Success' }));
    dispatch(user.actions.toggleLoggedState(true));
  };

  const handleLoginFailed = (loginError) => {
    dispatch(user.actions.setAccessToken({ accessToken: null }));
    dispatch(user.actions.toggleLoggedState(false));
    dispatch(user.actions.setStatusMessage({ statusMessage: loginError }));
  };


//? LOGIN user
  const handleLogin = (e) => {
    e.preventDefault();
    setErrorMessage("")

    fetch(LOGIN_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password }),
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error ('Incorrect email and/or password');
        } else {
          return res.json();
        }
      })
      .then((json) => handleLoginSuccess(json))
			.catch((err) => handleLoginFailed(err))

      .catch(err => {
        setErrorMessage(err.message)
      })
  }


  const reDirect = () => {
    history.push(`/register`)
  }


  if (!accessToken) {

  return (
    <>
    <Nav />
    <Link className="backLink" to={`/`}>
		  <BackArrow />
		</Link>
    <section className="login-form">
       {/* <img src={waitroom} alt="Logo"/> */}
      <form className="container">
      <h1>Please Log in</h1>
        <div className="form-control">
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
            <label className="form-label">Email </label>
        </div>
         <div className="form-control">
          <input
            type="password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
            <label className="form-label">Password</label>
        </div>
        <div>{errorMessage}</div>
        {/* <button type="submit" onClick={handleSignup}>
          Sign-Up
        </button> */}
        <button className="btn" type="submit" onClick={handleLogin}>
          Login
        </button>
       <p className="text">Don't have an account? 
       <button className="signup-btn" type="submit" onClick={reDirect}>Sign up</button></p>
      </form>
    </section>
  </>
  );
};
  return <Profile />
}

export default LoginForm;
