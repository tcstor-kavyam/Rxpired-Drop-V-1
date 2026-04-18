import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./Login.css";

const HomePage = () => {
    const location = useLocation();
    const navigate = useNavigate();

    const profile = location.state?.profile || {};

    const goToPage = (path) => {
        navigate(path, {state: {profile}});
    }

	return (
	<main className="login-page" aria-labelledby="login-heading">
		<section className="login-card">
			<h1 id="login-heading">Rxpired</h1>

            <div>
                Logged in: {profile.firstName} {profile.lastName}
            </div>
            <div>
                Status: {profile.status}
           </div>


           <button onClick={() =>goToPage("/add-medicine")}>
                [  Add Medicine  ]
           </button>
        
              <button onClick={() =>goToPage("/everyPilldrop")}> 
                [  EVERYDAY  DROP  ]

           </button>
            
           <button onClick={() =>goToPage("/disposeExpired")}>
[  DISPOSE EXPIRED MEDS  ]
         </button>
            
		</section>
	</main>
	);
};

export default HomePage;
