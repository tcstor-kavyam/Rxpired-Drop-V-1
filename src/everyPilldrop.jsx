import { useLocation, useNavigate } from "react-router-dom";	
import React from "react";
import {PinInput} from "react-input-pin-code";
import "./Login.css";

const EveryPillDrop = () => {
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
			<h1 id="login-heading">Everyday Pill Drop</h1>

			<form className="login-form" aria-label="Login form">
				<label className="field">
					<span className="label-text">User: {profile.firstName} {profile.lastName}</span>
					<span className="label-text">Box Status:</span>
				</label>

				<label className="field">
					TODAY'S DOSE
				</label>

				<label className="field remember">
					<ul>
						{
							profile.meds && profile.meds.map((med, index) => (
								<li key={index}>
									{med.name} - {med.dose}
								</li>
							))
						}
					</ul>
				</label>

				<button type="submit" className="btn-submit"> [Dispense Now]</button>
			</form>

			
		</section>
	</main>
	);
};

export default EveryPillDrop;
