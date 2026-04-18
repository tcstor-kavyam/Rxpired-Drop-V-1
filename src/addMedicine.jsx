import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./Login.css";

const AddMedicine = () => {
	const [medicineName, setMedicineName] = React.useState('');
	const [expirationDate, setExpirationDate] = React.useState('');
	const [dosageAmount, setDosage] = React.useState('');
	const [dosageFrequency, setDosageFrequency] = React.useState('');
	const [initialQuantity, setInitialQuantity] = React.useState('');
	const location = useLocation();
    const navigate = useNavigate();

    const profile = location.state?.profile || {};

    const goToPage = (path) => {
        navigate(path, {state: {profile}});
    }

	const addMedicine = (e) => {
		if (!medicineName || !expirationDate || !dosageAmount || !dosageFrequency || !initialQuantity){
			alert("Please fill out all fields");
			return;
		}
		e.preventDefault();
		console.log(profile);
		profile.meds.push(
			{
				"name": `${medicineName}`,
				"dose": `${dosageAmount} per ${dosageFrequency}`,
				"quantity": `${initialQuantity}`,
				"expires": `${expirationDate}`
			}
		)

		goToPage("/home");

	}

	return (
	<main className="login-page" aria-labelledby="login-heading">
		<section className="login-card">
			<h1 id="login-heading">Add Medicine</h1>

			<form className="login-form" aria-label="Login form" onSubmit={addMedicine}>
				<label className="field">
					<span className="label-text">[Enter Manually]</span>
				</label>
			<input type="text" placeholder="Prescription Name" value={medicineName} onChange={(e) => setMedicineName(e.target.value)} />
				<label className="field">
					<input type="date" value={expirationDate} onChange={(e) => setExpirationDate(e.target.value)} />
				</label>
				<div>	
				<input type="number" placeholder="Dosage" value={dosageAmount} onChange={(e) => setDosage(e.target.value)} />
				Per:
				<select value={dosageFrequency} onChange={(e) => setDosageFrequency(e.target.value)}>
					<option value="day">day</option>
					<option value="week">week</option>
					<option value="month">month</option>

				</select>
				</div>
					<input type="number" placeholder="Quantity" value={initialQuantity} onChange={(e) => setInitialQuantity(e.target.value)} />
				

				<button type="submit" className="btn-submit">Add</button>
			</form>

			
		</section>
	</main>
	);
};

export default AddMedicine;
