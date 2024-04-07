import React from 'react';
import './Confirmation.scss';

function Confirmation() {
  const handleContinue = () => {
    window.location.href = '/login'; // Redirect to /login route
  };

  return (
    <div className='confirm-password-body'>
    <div className="confirmation-modal">
      <h2>Email Sent</h2>
      <p>An email has been sent to you. Kindly open your inbox and verify.</p>
      <div className="inbox-icon">
        {/* Insert your inbox icon here */}
        <i className="fa fa-inbox"></i>
      </div>
      <button className="continue-button" onClick={handleContinue}>Continue to Login</button>
    </div>
    </div>
  );
}

export default Confirmation;
