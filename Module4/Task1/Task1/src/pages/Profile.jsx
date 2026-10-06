import { useLocation, useNavigate, Navigate } from "react-router-dom";
import Student from "../components/student";

function Profile() {
  const { state } = useLocation();
  const navigate = useNavigate();

  if (!state) return <Navigate to="/" />;

  return (
    <div className="page">
      <div className="blob blob1"></div>
      <div className="blob blob2"></div>

      <h1 className="title">Student Profile</h1>

      <div className="layout">
        <Student
          name={state.name}
          rollNo={state.rollNo}
          course={state.course}
          college={state.college}
        />
      </div>

      <div className="back-wrap">
        <button className="back-btn" onClick={() => navigate("/")}>
          ← Back
        </button>
      </div>
    </div>
  );
}

export default Profile;