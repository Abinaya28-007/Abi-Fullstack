import React from "react";
import { useLocation, Link } from "react-router-dom";

function Dashboard() {
  const location = useLocation();
  const username = location.state?.username;

  return (
    <div className="page center">
      <div className="card">
        {username ? (
          <>
            <h2>Hello, {username} 🎉</h2>
            <p>You have logged in successfully.</p>
            <Link to="/" className="btn full">Back to Home</Link>
          </>
        ) : (
          <>
            <h2>Access Denied</h2>
            <p>Please login first.</p>
            <Link to="/login" className="btn full">Go to Login</Link>
          </>
        )}
      </div>
    </div>
  );
}

export default Dashboard;