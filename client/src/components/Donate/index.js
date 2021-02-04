// import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
// import { useMutation } from '@apollo/react-hooks';
// import { DONATE } from "../../utils/mutations";
import './index.css';

function Donate() {
    //form state stuff

    //handle form submit async funciton

    //hanle change function

    return(
        <div className="DonateSection">
            <div className="DonateContainer">
                <div className="DonateTitle">Make a Donation</div>
                <form className="DonationForm">
                    <div className="DonationName">
                        <label htmlFor="name">Name: </label>
                        <input 
                            className="DonationNameInputField"
                            type="input" 
                            name="name"
                            // onChange={handleChange}
                        />
                    </div>
                    <div className="DonationEmail">
                        <label htmlFor="email">Email: </label>
                        <input 
                            className="DonationEmailInputField"
                            type="email" 
                            name="email"
                            // onChange={handleChange}
                        />
                    </div>
                    <div className="DonationAmount">
                        <label htmlFor="amount">Amount: </label>
                        <input 
                            className="DonationAmountInputField"
                            type="number" 
                            name="amount"
                            // onChange={handleChange}
                        />
                    </div>
                </form> 
            </div>
        </div>
    )
}




    
    // <div>
    //   <button type="submit">Next</button>
    // </div>

export default Donate;
