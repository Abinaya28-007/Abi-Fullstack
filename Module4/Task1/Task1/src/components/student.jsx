function Student({ name, rollNo, course, college }) {
  const initial = name ? name.charAt(0).toUpperCase() : "?";

  return (
    <div className="id-card">
      <div className="id-header">
        <span className="id-college">{college}</span>
        <span className="id-tag">STUDENT ID</span>
      </div>

      <div className="id-body">
        <div className="avatar">{initial}</div>
        <h2 className="id-name">{name}</h2>
        <span className="id-course">{course}</span>
      </div>

      <div className="id-footer">
        <div>
          <small>ROLL NO</small>
          <strong>{rollNo}</strong>
        </div>
        <div className="barcode"></div>
      </div>
    </div>
  );
}

export default Student;