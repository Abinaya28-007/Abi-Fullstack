import { useState } from "react";
import "./Student.css";

function Student({ name, subject }) {
  const [marks, setMarks] = useState(50);

  const increase = () => setMarks((m) => Math.min(100, Number(m) + 1));
  const decrease = () => setMarks((m) => Math.max(0, Number(m) - 1));

  const handleInput = (e) => {
    const val = e.target.value;
    if (val === "") return setMarks("");
    setMarks(Math.min(100, Math.max(0, Number(val))));
  };

  return (
    <div className="card">
      <div className="avatar">{name.charAt(0).toUpperCase()}</div>
      <h2 className="title">Student Details</h2>

      <p className="row"><span>Student Name:</span> {name}</p>
      <p className="row"><span>Subject:</span> {subject}</p>

      <div className="marks-box">
        <span className="marks-label">Marks</span>
        <input
          className="marks-input"
          type="number"
          min="0"
          max="100"
          value={marks}
          onChange={handleInput}
        />
        <div className="bar">
          <div className="bar-fill" style={{ width: `${marks || 0}%` }} />
        </div>
      </div>

      <div className="btn-group">
        <button className="btn inc" onClick={increase}>Increase Marks</button>
        <button className="btn dec" onClick={decrease}>Decrease Marks</button>
      </div>
    </div>
  );
}

export default Student;