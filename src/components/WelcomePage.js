import React from 'react';
import { useNavigate } from 'react-router-dom';

const WelcomePage = () => {
  const navigate = useNavigate();

  return (
    <div style={styles.container}>
      <div style={styles.mobileBox}>
        <h2 style={styles.title}>Welcome to PopX</h2>
        <p style={styles.subtitle}>Let’s help you manage your business better</p>

        <button
          style={{ ...styles.button, ...styles.primaryButton }}
          onClick={() => navigate('/create-account')}
        >
          Create Account
        </button>

        <button
          style={{ ...styles.button, ...styles.outlineButton }}
          onClick={() => navigate('/login')}
        >
          Already Registered? Login
        </button>
      </div>
    </div>
  );
};

const styles = {
  container: {
    minHeight: '100vh',
    backgroundColor: '#f2f4f7',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  mobileBox: {
    width: '100%',
    maxWidth: 375,         // typical mobile width
    backgroundColor: 'white',
    borderRadius: 16,
    boxShadow: '0 4px 16px rgba(0,0,0,0.1)',
    padding: 24,
    textAlign: 'center',
  },
  title: {
    marginBottom: 12,
    fontSize: 24,
    fontWeight: '700',
    color: '#222',
  },
  subtitle: {
    marginBottom: 32,
    fontSize: 16,
    color: '#555',
  },
  button: {
    width: '100%',
    padding: 14,
    borderRadius: 50,
    fontSize: 16,
    fontWeight: '600',
    cursor: 'pointer',
    marginBottom: 16,
    border: 'none',
  },
  primaryButton: {
    backgroundColor: '#0066FF',
    color: 'white',
  },
  outlineButton: {
    backgroundColor: 'transparent',
    color: '#0066FF',
    border: '2px solid #0066FF',
  },
};

export default WelcomePage;
