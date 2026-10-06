import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="page center">
      <div className="hero">
        <h1>Welcome 👋</h1>
        <p>A simple React login app built using useState and React Router.</p>
        <Link to="/login" className="btn">Go to Login</Link>
      </div>
    </div>
  );
}

export default Home;