import { useState } from "react";
import Student from "./components/Student";
import "./App.css";

function App() {
  const [form, setForm] = useState({ name: "", subject: "" });
  const [student, setStudent] = useState(null);

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    setStudent({ name: form.name.trim(), subject: form.subject.trim() });
  };

  const handleReset = () => {
    setStudent(null);
    setForm({ name: "", subject: "" });
  };

  return (
    <div className="app">
      {!student ? (
        <form className="form-card" onSubmit={handleSubmit}>
          <h2>Enter Student Details</h2>

          <input
            className="field"
            type="text"
            name="name"
            placeholder="Student name"
            value={form.name}
            onChange={handleChange}
            required
          />
          <input
            className="field"
            type="text"
            name="subject"
            placeholder="Subject"
            value={form.subject}
            onChange={handleChange}
            required
          />

          <button className="submit-btn" type="submit">
            Submit
          </button>
        </form>
      ) : (
        <div className="result">
          <Student name={student.name} subject={student.subject} />
          <button className="back-btn" onClick={handleReset}>
            ← Add Another Student
          </button>
        </div>
      )}
    </div>
  );
}

export default App;