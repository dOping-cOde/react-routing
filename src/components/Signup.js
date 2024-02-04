import React from 'react';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
  const navigate = useNavigate();

  function changeHandler() {
    // Add logic for handling input changes if needed
  }

  function handleSubmit(e) {
    e.preventDefault();
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
      backgroundColor: '#28a745',
      color: '#fff',
      padding: '10px',
      cursor: 'pointer',
      borderRadius: '4px',
      border: 'none',
      marginTop: '10px',
    },
    loginButton: {
      backgroundColor: '#007bff',
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
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          placeholder='Enter your username'
          onChange={changeHandler}
          name='username'
          style={styles.input}
        />
        <input
          type='email'
          placeholder='Enter your email'
          onChange={changeHandler}
          name='email'
          style={styles.input}
        />
        <input
          type='password'
          placeholder='Enter your password'
          onChange={changeHandler}
          name='password'
          style={styles.input}
        />
        <button type='submit' style={styles.button}>
          Signup
        </button>
      </form>
      <span>Already registered?</span>
      <button onClick={() => navigate('/login')} style={styles.loginButton}>
        Login
      </button>
    </div>
  );
};

export default Signup;
