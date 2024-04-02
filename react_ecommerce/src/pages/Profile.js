import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../AuthContext';
import '../style/Profile.css'; // Import CSS file for styling
import Footer from '../components/Footer';
import Header from '../components/Header';

const Profile = () => {
  const {userId, userName, email, phone } = useAuth();

  return (
    <>
    <Header/>
    <div className='profile-container'>
      <div className='profile-header'>
        <h2>Welcome {userName}</h2>
      </div>
      <div className='profile-card'>
        <div className='profile-details'>
          <h3>User Profile</h3>
          <p>UserId:{userId}</p>
          <p>Name: {userName}</p>
          <p>Email: {email}</p>
          <p>Phone: {phone}</p>
          {/* Display other user details as needed */}
        </div>
        <Link to={`/UPDATE/${userId}`} className='update-link'>
          Update Profile
        </Link>
      </div>
    </div>
    <Footer/>
    </>
  );
};

export default Profile;
