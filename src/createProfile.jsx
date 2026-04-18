import React from "react";
import {PinInput} from "react-input-pin-code";
import { useLocation, useNavigate } from "react-router-dom";
import "./Login.css";

const CreateProfile = () => {
	const [values, setValues] = React.useState(['', '', '', '']);

	  const location = useLocation();
    const navigate = useNavigate();

    const profile = location.state?.profile || {};

    const goToPage = (path) => {
        navigate(path, {state: {profile}});
    }

	return (
	<main className="login-page" aria-labelledby="login-heading">
		<section className="login-card">
			<h1 id="login-heading">Create Owner Profile</h1>

			<form className="login-form" aria-label="Login form">
				<label className="field">
					<span className="label-text">First Name</span>
					<input type="text" name="first" placeholder="First Name" />
					<span className="label-text">Last Name</span>
					<input type="text" name="last" placeholder="Last Name" />
				</label>
                

				<label className="field">
					<span className="label-text">Create 4-6 digit PIN</span>
					{/* <input type="password" name="password" placeholder="****" /> */}
					<PinInput
						values={values}
						onChange={(value, index, values) => setValues(values)}
						type="number"
						/>
				</label>

				

				<button type="submit" className="btn-submit">Create Profile</button>
			</form>

			
		</section>
	</main>
	);
};

export default CreateProfile;
