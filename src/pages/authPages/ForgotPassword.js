import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { Link } from "react-router-dom";

const ForgotPassword = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('gmail', 'template_0orfw58', form.current, 'MpJLGec3_Y-KGPKke')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <form ref={form} onSubmit={sendEmail}>
      <p>Forgot Password</p>
      <label>Email </label>
      <input type="email" name="user_email" placeholder="something@something"  />
      
      <input type="submit" value="Send" />
      <div className="auth-option text-center pt-2"><Link className="text-link" to="/login" >Back to Login</Link></div>

    </form>
  );
};
export default ForgotPassword;