import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [success, setSuccess] = useState(false);
  const navigate = useNavigate();

  const handleLogin = () => {
    if (username && password) {
      setMessage("Login Successful");
      setSuccess(true);
      setTimeout(() => navigate("/dashboard", { state: { username } }), 1200);
    } else {
      setMessage("Please enter username and password");
      setSuccess(false);
    }
  };

  return (
    <div className="page center">
      <div className="card">
        <h2>Login</h2>

        <label>Username</label>
        <input
          type="text"
          placeholder="Enter username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

        <label>Password</label>
        <input
          type="password"
          placeholder="Enter password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button className="btn full" onClick={handleLogin}>Login</button>

        {message && (
          <p className={success ? "msg success" : "msg error"}>{message}</p>
        )}
      </div>
    </div>
  );
}

export default Login;