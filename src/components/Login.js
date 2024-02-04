import React from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();

  function changeHandler() {
    // Add logic for handling input changes if needed
  }

  function submitHandler() {
    // Add logic for form submission if needed
  }

  const styles = {
    container: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      padding: '20px',
      maxWidth: '300px',
      margin: 'auto',
      marginTop: '50px',
      border: '1px solid #ccc',
      borderRadius: '8px',
    },
    input: {
      marginBottom: '10px',
      padding: '8px',
      width: '100%',
      boxSizing: 'border-box',
    },
    button: {
      backgroundColor: '#007bff',
      color: '#fff',
      padding: '10px',
      cursor: 'pointer',
      borderRadius: '4px',
      border: 'none',
    },
    signupButton: {
      backgroundColor: '#28a745',
      color: '#fff',
      padding: '10px',
      cursor: 'pointer',
      borderRadius: '4px',
      border: 'none',
      marginTop: '10px',
    },
  };

  return (
    <div style={styles.container}>
      <form onSubmit={submitHandler}>
        <input
          type='text'
          placeholder='Enter your email'
          name='username'
          onChange={changeHandler}
          style={styles.input}
        />
        <input
          type='password'
          placeholder='Enter your password'
          name='password'
          onChange={changeHandler}
          style={styles.input}
        />
        <button type='submit' style={styles.button}>
          Login
        </button>
      </form>
      <span>Not registered?</span>
      <button onClick={() => navigate('/signup')} style={styles.signupButton}>
        Signup
      </button>
    </div>
  );
};

export default Login;
