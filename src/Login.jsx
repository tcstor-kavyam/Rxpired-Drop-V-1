import { useNavigate, useLocation} from "react-router-dom";	
import userData from "./users.json";
import React from "react";
import {PinInput} from "react-input-pin-code";
import "./Login.css";

const Login = () => {
	const [values, setValues] = React.useState(['', '', '', '']);
	const [firstName, setFirstName] = React.useState('');
	const [lastName, setLastName] = React.useState('');
	const location = useLocation();
    const navigate = useNavigate();

    let profile = location.state?.profile || {};

    const goToPage = (path) => {
        navigate(path, {state: {profile}});
    }
	

	function confirmUser(fn, ln, pin){
		const userNames = Object.keys(userData)
		if (userNames.includes(`${fn} ${ln}`)){
			const name = `${fn} ${ln}`;
			if (String(userData[name].PIN) === pin){
				profile = userData[name];
				goToPage("/home");
			}
		}
	}
	
	return (
	<main className="login-page" aria-labelledby="login-heading">
		<section className="login-card">
			<h1 id="login-heading">Sign in to your account</h1>

			<form className="login-form" aria-label="Login form">
				<label className="field">
					<span className="label-text">First Name</span>
					<input 
						type="text" 
						name="first" 
						placeholder="First Name" 
						value={firstName}
						onChange={(e) => setFirstName(e.target.value)}
					/>
					<span className="label-text">Last Name</span>
					<input 
						type="text" 
						name="last" 
						placeholder="Last Name" 
						value={lastName}
						onChange={(e) => setLastName(e.target.value)} 
					/>
				</label>

				<label className="field">
					<span className="label-text">PIN</span>
					<PinInput
						values={values}
						onChange={(value, index, values) => setValues(values)}
						type="number"
						/>
				</label>

				<label className="field remember">
					<input type="checkbox" name="remember" />
					<span className="label-text">Remember me</span>
				</label>

				<button type="submit" className="btn-submit" onClick={(e) => {
					e.preventDefault();
					confirmUser(firstName, lastName, values.join(''));
				}}>Sign in</button>
			</form>

			<p className="login-meta">
				<a href="#">Forgot password?</a>
				<span className="sep">•</span>
				<a href="./create-profile">Create an account</a>
			</p>
		</section>
	</main>
	);
};

export default Login;
