import React, { useState } from 'react';
import './Signup.css'; // Import your CSS file
import InputControl from '../InputControl/InputControl';
import { Link, useNavigate } from 'react-router-dom';
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { auth } from '../../firebase';

function Signup() {
  const navigate = useNavigate();
  const [values, setValues] = useState({
    name: '',
    email: '',
    pass: '', // Ensure it matches the key used in InputControl for password
  });
  const [errorMsg, setErrorMsg] = useState('');
  const [submitButtonDisabled, setSubmitButtonDisabled] = useState(false);

  const handleSubmission = () => {
    if (!values.name || !values.email || !values.pass) {
      setErrorMsg('Fill all fields');
      return;
    }
    setErrorMsg('');
    setSubmitButtonDisabled(true);

    createUserWithEmailAndPassword(auth, values.email, values.pass)
      .then((res) => {
        const user = res.user;
        updateProfile(user, {
          displayName: values.name,
        }).then(() => {
          setSubmitButtonDisabled(false);
          navigate('/');
        });
      })
      .catch((err) => {
        setSubmitButtonDisabled(false);
        setErrorMsg(err.message);
      });
  };

  return (
    <div className="container_login">
      <div className="container_inner">
        <h1 className="head">Signup</h1>
        <InputControl
          label="Name"
          placeholder="Enter your name"
          onChange={(event) => setValues((prev) => ({ ...prev, name: event.target.value }))}
        />
        <InputControl
          label="Email"
          placeholder="Enter email address"
          onChange={(event) => setValues((prev) => ({ ...prev, email: event.target.value }))}
        />
        <InputControl
          label="Password"
          placeholder="Enter Password"
          onChange={(event) => setValues((prev) => ({ ...prev, pass: event.target.value }))}
        />
        <div className="footer_login">
          <b className="error">{errorMsg}</b>
          <button onClick={handleSubmission} disabled={submitButtonDisabled}>
            Signup
          </button>
          <p>
            Already have an account?{' '}
            <span>
              <Link to="/Login">Login</Link>
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Signup;
