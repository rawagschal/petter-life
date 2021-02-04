import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import React from 'react';
// import { useMutation } from '@apollo/react-hooks';
// import { DONATE } from "../../utils/mutations";
import './index.css';

function Donate() {
    //form state stuff
    
    //handle change function

    //for stripe card element
    const stripe = useStripe();
    const elements = useElements();

    //handle form submit async funciton
    const handleSubmit = async (event) => {
        event.preventDefault();
        const {error, paymentMethod} = await stripe.createPaymentMethod({
            type: 'card',
            card: elements.getElement(CardElement),
        });
    };

    return(
       
        <div className="DonateSection">
            <div className="DonateContainer">
                <div className="DonateTitle">Make a Donation</div>
                <form className="DonationForm" onSubmit={handleSubmit}>  
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
                            name="cardholder"
                            // value="cardholder-name"
                            // onChange={handleChange}
                        />
                    </div>
                    
                    <div className="CardInfo">
                        <label htmlFor="card-element">Credit or Debit Card: </label>
                        <CardElement />
                    </div>
                    <div className="CardErrors" id="card-errors"></div>
                    <button id="card-button" data-secret="{{intentSecret}}">
                        Donate
                    </button>
                </form> 
            </div>
            <script src="https://js.stripe.com/v3/"></script>
        </div>
   
        
    )
   
}




    
    // <div>
    //   <button type="submit">Next</button>
    // </div>

export default Donate;
