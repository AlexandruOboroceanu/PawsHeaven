import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './LoginSingup.css';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../firebase.js'; 
import './LoginSingup.css';

import user_icon from '../Assets/person.png';
import email_icon from '../Assets/email.png';
import password_icon from '../Assets/password.png';

export const LoginSingup = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [action, setAction] = useState('Sign Up');
    const navigate = useNavigate();
  
    const handleSignUp = async () => {
      if (!name || !email || !password) {
        alert('Please fill in all fields.');
        return;
      }
      try {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        console.log('User signed up:', userCredential.user);
        navigate('/main'); // Redirect to the main page
      } catch (error) {
        console.error('Error signing up:', error.message);
        alert(error.message);
      }
    };
  const handleLogin = () => {
    if (!email || !password) {
      alert('Please enter both email and password.');
      return;
    }
    navigate('/main');
  };

  return (
    <div>
      <div className="Title">Paws Haven</div>
      <div className="container">
      <div class="cat">
        <div class="head">
        <div class="mouth"></div>
        <div class="whiskers-left">
            <div class="whisker"></div>
            <div class="whisker"></div>
            <div class="whisker"></div>
        </div>
        <div class="whiskers-right">
            <div class="whisker"></div>
            <div class="whisker"></div>
            <div class="whisker"></div>
        </div>
    </div>
            <div class="tail"></div>
            <div class="ear-left"></div>
            <div class="ear-right"></div>
            <div class="eye-left"></div>
            <div class="eye-right"></div>
        </div>
        <div className="header">
          <div className="text">{action}</div>
          <div className="underline"></div>
        </div>

        <div className="inputs">
          {action === 'Sign Up' && (
            <div className="input">
              <img src={user_icon} alt="User Icon" />
              <input
                type="text"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
          )}
          <div className="input">
            <img src={email_icon} alt="Email Icon" />
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="input">
            <img src={password_icon} alt="Password Icon" />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
        </div>

        <div className="forgot-password">
          Lost Password? <span>Click Here</span>
        </div>

        <div className="submit-container">
          {action === 'Sign Up' && (
            <div className="submit" onClick={handleSignUp}>
              Sign Up
            </div>
          )}
          {action === 'Login' && (
            <div className="submit" onClick={handleLogin}>
              Login
            </div>
          )}
          <div
            className="submit toggle"
            onClick={() =>
              setAction((prevAction) => (prevAction === 'Sign Up' ? 'Login' : 'Sign Up'))
            }
          >
            {action === 'Sign Up' ? 'Switch to Login' : 'Switch to Sign Up'}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginSingup;