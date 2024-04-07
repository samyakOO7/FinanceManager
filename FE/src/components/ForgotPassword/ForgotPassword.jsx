import React, { useState } from 'react';
import './ForgotPassword.scss';

function ForgotPassword() {
  const [email, setEmail] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // const response = await axios.post('/api/reset-password', { email });
      // console.log(response.data);
      // Handle success (
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className='forgot-password-body'>
    <div className="forgot-password-modal">
      <h2>Forgot Password</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          name="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          required
        />
        <button type="submit">Reset Password</button>
      </form>
    </div>
    </div>
  );
}

export default ForgotPassword;