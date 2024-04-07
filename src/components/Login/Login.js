import React, { useState } from 'react'; // Import useState hook
import './Login.css'; // Import your CSS file
import InputControl from '../InputControl/InputControl';
import { Link, useNavigate } from 'react-router-dom';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../firebase';

function Login() {
  const navigate = useNavigate();
  
  // State variables to store email and password
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  const handleLogin = async () => {
    // Perform login logic here, e.g., using Firebase authentication
    try {
      // Perform login operation
      const userCredentials = await signInWithEmailAndPassword(auth, email, password);
      
      // Redirect to a fresh page (e.g., "/dashboard") after successful login
      navigate('/dashboard'); // Adjust this line to redirect to your desired route
    } catch (error) {
      // Handle login error
      console.error('Login failed:', error.message);
    }
  };

  return (
    <div className='container_login'>
      <div className='container_inner'>
        <h1 className='head'>Login</h1>
        {/* Update state with email input value */}
        <InputControl label='Email' placeholder='Enter email' onChange={(event) => setEmail(event.target.value)} />
        {/* Update state with password input value */}
        <InputControl label='Password' placeholder='Enter password' onChange={(event) => setPassword(event.target.value)} />
        <div className='footer_login'>
          <button onClick={handleLogin}>Login</button>
          <p>
            Don't have an account?{' '}
            <span>
              <Link to='/signup'>Signup</Link>
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
