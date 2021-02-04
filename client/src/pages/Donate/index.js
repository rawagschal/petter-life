import { loadStripe } from '@stripe/stripe-js';
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
                        <label htmlFor="amount" for="amount">Amount: </label>
                        <input 
                            id="amount"
                            className="DonationAmountInputField"
                            type="number" 
                            name="amount"
                            // onChange={handleChange}
                        />
                    </div>
                    <div className="CardholderName">
                        <label htmlFor="cardholderName">Name on Card: </label>
                        <input 
                            className="CardholderNameInputField"
                            type="text" 
                            name="cardholder-name"
                            // value="cardholder-name"
                            // onChange={handleChange}
                        />
                    </div>
                    <div className="CardInfo">
                        <label htmlFor="card-element">Credit or Debit Card: </label>
                        <input 
                            id="card-element"
                            className="DonationAmountInputField"
                            type="number" 
                            name="amount"
                            // onChange={handleChange}
                        />
                    </div>
                    <div className="CardErrors" id="card-errors"></div>
                    <button id="card-button" data-secret="{{intentSecret}}">
                        Donate
                    </button>
                </form> 
            </div>
        </div>
    )
}




    
    // <div>
    //   <button type="submit">Next</button>
    // </div>

export default Donate;
