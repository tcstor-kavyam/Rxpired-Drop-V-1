import "./Login.css";

const DisposeExpired = () => {

	  const location = useLocation();
    const navigate = useNavigate();

    const profile = location.state?.profile || {};

    const goToPage = (path) => {
        navigate(path, {state: {profile}});
    }
	return (
	<main className="login-page" aria-labelledby="login-heading">
		<section className="login-card">
			<h1 id="login-heading">Dispose expired meds</h1>

			<form className="login-form" aria-label="Login form">
				<label className="field">
					<span className="label-text">Expired Medications</span>
					<ul>
						<li>
							<label>	
								<input type="checkbox" name="medicineA" value="medicineA" /> 							Medicine A 01/10/24

							</label>
						</li>
				
						<li>
							<label>

							<input type="checkbox" name="medicineB" value="medicineB" /> Medicine B 11/02/25
							</label>
						</li>
				
					</ul>
					<span className="label-text">Other Medications</span>				</label>
					<ul>
						<li>
							<label>	
						<input type="checkbox" name="medicineC" value="medicineC" /> Medicine C 04/10/26

							</label>
						</li>
						<li>
							<label>
							<input type="checkbox" name="medicineD" value="medicineD" /> Medicine D 07/15/27
							</label>
						</li>
					</ul>

					<button>Dispose Selected</button>
						
				

				
			</form>

			
		</section>
	</main>
	);
};

export default DisposeExpired;
