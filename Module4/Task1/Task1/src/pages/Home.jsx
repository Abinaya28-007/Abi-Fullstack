import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Home() {
  const [form, setForm] = useState({ name: "", rollNo: "", course: "", college: "" });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/profile", { state: form });
  };

  return (
    <div className="page">
      <div className="blob blob1"></div>
      <div className="blob blob2"></div>

      <h1 className="title">Student Profile</h1>

      <div className="layout">
        <form className="glass" onSubmit={handleSubmit}>
          <h3>Enter Details</h3>

          <label>Name</label>
          <input name="name" placeholder="Rahul" value={form.name} onChange={handleChange} required />

          <label>Roll No</label>
          <input name="rollNo" placeholder="101" value={form.rollNo} onChange={handleChange} required />

          <label>Course</label>
          <input name="course" placeholder="BCA" value={form.course} onChange={handleChange} required />

          <label>College</label>
          <input name="college" placeholder="ABC College" value={form.college} onChange={handleChange} required />

          <button type="submit">Generate Card ✨</button>
        </form>
      </div>
    </div>
  );
}

export default Home;