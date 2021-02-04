import React, { useState } from 'react';
import { useHistory, Link } from 'react-router-dom'

import BackArrow from '../lib/BackArrow';


 const SignupForm = () => {
	const SIGNUP_URL = 'http://localhost:8080/users';
  const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [errorMessage, setErrorMessage] = useState("")
	const [signedUp, setSignedUp] = useState(false)
  const history = useHistory()


	const handleSignup = (event) => {
		event.preventDefault();

		fetch(SIGNUP_URL, {
			method: 'POST',
			body: JSON.stringify({ email,  password }),
			headers: { 'Content-Type': 'application/json' },
		})
			.then((res) => {
				if (!res.ok) {
					throw new Error('Signup failed');
				}
				else {
          setSignedUp(true)
          return res.json()
			}
		})
		.then(({ accessToken }) => {
			if (accessToken) {
				window.localStorage.setItem("accessToken", accessToken)
				history.push(`/users`)
			}
		})
			.then((json) => json)
			.catch(err => {
        setErrorMessage(err.message)
	});
}

//? startover if faulty sign up
//  const reDirect = () => {
// 	history.push(`/register`)
// }

//? continues to profile page if success
// const reDirectProfile = () => {
// 	history.push(`/users/:id`)
// }

	return (
		<>
		<Link className="backLink" to={`/`}>
		<BackArrow />
		</Link>
		<section className="login-form">
			<form className="container" onSubmit={handleSignup}>
			<h1>Join us!</h1>
					<div className="form-control">
					<input
						required
						type="text"
						name="email"
						value={email}
						onChange={(event) => setEmail(event.target.value)}
						minLength="3"
					/>
			 <label className="form-label">Email 
			 		{email.length < 3 && email.length !== 0 && " is too short"}
          {email.length > 20 && " is too long"} 
					</label>
			 </div>
					<div className="form-control">
					<input
						required
						type="password"
						name="select-password"
						value={password}
						onChange={(event) => setPassword(event.target.value)}
						minLength="5"
					/>
				 <label className="form-label">Password</label>
				 </div>
        <div>{errorMessage}</div>
				<button className="btn" type="submit">Yes!</button>
			</form>
		</section>
	</>
	);
};


export default SignupForm;
