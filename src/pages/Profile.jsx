import React, { useContext } from 'react';
import { Navigate } from 'react-router';
import { AuthContext } from '../context/AuthContext';
import '../styles/Profile.css';

function Profile() {
  const { user, logout } = useContext(AuthContext);

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  return (
    <div className="profile-container">
      <div className="profile-header">
        <div className="avatar">
          {user.name.charAt(0).toUpperCase()}
        </div>
        <div className="profile-info">
          <h1>{user.name}</h1>
          <p>{user.email}</p>
        </div>
      </div>

      <div className="profile-content">
        <div className="profile-card">
          <h2>Account Settings</h2>
          <form className="settings-form" onSubmit={(e) => e.preventDefault()}>
            <div className="form-group">
              <label>Full Name</label>
              <input type="text" defaultValue={user.name} />
            </div>
            <div className="form-group">
              <label>Email</label>
              <input type="email" defaultValue={user.email} />
            </div>
            <button className="save-btn">Save Changes</button>
          </form>
        </div>

        <div className="profile-card">
          <h2>Order History</h2>
          <div className="order-empty">
            <p>You haven't placed any orders yet.</p>
          </div>
        </div>
      </div>
      
      <button onClick={logout} className="logout-btn-large">
        Logout from account
      </button>
    </div>
  );
}

export default Profile;
