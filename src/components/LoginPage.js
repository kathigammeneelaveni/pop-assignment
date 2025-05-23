import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

const LoginPage = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = () => {
    if (!email || !password) {
      setError('Please enter both email and password');
      return;
    }
    setError('');
    // For demo, just navigate to home or dashboard or personal details page
    navigate('/personal-details'); 
  };

  return (
    <div style={styles.container}>
      <div style={styles.mobileBox}>
        <h3 style={styles.heading}>Login to your PopX account</h3>

        {error && <div style={styles.error}>{error}</div>}

        <input
          style={styles.input}
          type="email"
          placeholder="Email Address"
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
        <input
          style={styles.input}
          type="password"
          placeholder="Password"
          value={password}
          onChange={e => setPassword(e.target.value)}
        />

        <button
          style={{ ...styles.button, ...styles.primaryButton }}
          onClick={handleLogin}
        >
          Login
        </button>

        <div style={styles.bottomText}>
          Don't have an account?{' '}
          <Link to="/create-account" style={styles.link}>
            Create one
          </Link>
        </div>
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
    maxWidth: 375,
    backgroundColor: 'white',
    borderRadius: 16,
    boxShadow: '0 4px 16px rgba(0,0,0,0.1)',
    padding: 24,
    boxSizing: 'border-box',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  heading: {
    marginBottom: 24,
    fontWeight: '700',
    fontSize: 22,
    color: '#222',
  },
  input: {
    width: '100%',
    padding: 14,
    marginBottom: 16,
    borderRadius: 50,
    border: '1.5px solid #ccc',
    fontSize: 16,
    outline: 'none',
    boxSizing: 'border-box',
  },
  button: {
    width: '100%',
    padding: 14,
    borderRadius: 50,
    fontSize: 16,
    fontWeight: '600',
    cursor: 'pointer',
    border: 'none',
    marginTop: 8,
    marginBottom: 16,
  },
  primaryButton: {
    backgroundColor: '#0066FF',
    color: 'white',
  },
  error: {
    width: '100%',
    marginBottom: 12,
    color: '#D32F2F',
    fontWeight: '600',
    textAlign: 'center',
  },
  bottomText: {
    fontSize: 14,
    color: '#555',
  },
  link: {
    color: '#0066FF',
    textDecoration: 'none',
    fontWeight: '600',
  },
};

export default LoginPage;
