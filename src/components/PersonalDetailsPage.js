import React from 'react';
import { useLocation } from 'react-router-dom';

function PersonalDetailsPage() {
  const location = useLocation();
  const fullName = location.state?.fullName || 'User Name';
  const email = location.state?.email || 'user@example.com';

  return (
    <div style={styles.pageContainer}>
      <div style={styles.card}>
        <header style={styles.header}>
          <h4 style={styles.heading}>Account Settings</h4>
        </header>

        <section style={styles.profileSection}>
          <img
            src="https://cdn-icons-png.flaticon.com/512/4140/4140043.png"
            alt="Profile"
            style={styles.profileImage}
          />
          <div style={styles.profileInfo}>
            <h5 style={styles.profileName}>{fullName}</h5>
            <p style={styles.profileEmail}>{email}</p>
          </div>
        </section>

        <section style={styles.descriptionSection}>
          <p style={styles.descriptionText}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque fermentum, urna a bibendum condimentum, purus nisl gravida urna, at congue leo elit non nisl.
          </p>
        </section>
      </div>
    </div>
  );
}

const styles = {
  pageContainer: {
    minHeight: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f8f9fa', // light grey background to center card nicely
    padding: '1rem',
  },
  card: {
    backgroundColor: '#ffffff',
    borderRadius: '8px',
    boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
    maxWidth: '400px',
    width: '100%',
    padding: '24px',
    boxSizing: 'border-box',
  },
  header: {
    backgroundColor: '#ffffff',
    padding: '12px 0',
    borderBottom: '1px solid #dee2e6',
    marginBottom: '20px',
  },
  heading: {
    margin: 0,
    fontWeight: '600',
    fontSize: '1.5rem',
    color: '#212529',
    textAlign: 'center',
  },
  profileSection: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '20px',
  },
  profileImage: {
    width: '80px',
    height: '80px',
    borderRadius: '50%',
    objectFit: 'cover',
    marginRight: '16px',
    border: '2px solid #dee2e6',
  },
  profileInfo: {
    flex: 1,
  },
  profileName: {
    margin: '0 0 4px 0',
    fontWeight: '600',
    fontSize: '1.25rem',
    color: '#212529',
  },
  profileEmail: {
    margin: 0,
    fontSize: '0.9rem',
    color: '#6c757d',
  },
  descriptionSection: {
    marginTop: '12px',
  },
  descriptionText: {
    fontSize: '1rem',
    lineHeight: 1.5,
    color: '#495057',
    textAlign: 'center',
  },
};

export default PersonalDetailsPage;
