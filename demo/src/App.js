import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="container">
      <div style={{ textAlign: "center" }}>
        <h2 style={{ width: "300px", margin: "auto" }}>
          Job Application Form
        </h2>
      </div>

      <form>
        {/* Personal Info */}
        <label>Full Name</label>
        <input type="text" name="fullname" required />

        <label>DOB</label>
        <input type="date" name="startdate" />

        <label>Email</label>
        <input type="email" name="email" required />

        <label>Phone Number</label>
        <input type="tel" name="phone" required />

        <label>Address</label>
        <textarea name="address"></textarea>

        {/* Job Info */}
        <label>Position Applying For</label>
        <input type="text" name="position" />

        <label>Expected Salary</label>
        <input type="number" name="salary" />

        <label>Available Start Date</label>
        <input type="date" name="startdate" />

        {/* Education */}
        <label>Highest Qualification</label>
        <input type="text" name="qualification" />

        {/* Experience */}
        <label>Work Experience</label>
        <textarea name="experience"></textarea>

        {/* Skills */}
        <label>Skills</label>
        <textarea name="skills"></textarea>

        {/* Upload Resume */}
        <label>Upload Resume</label>
        <input type="file" name="resume" />

        {/* Submit */}
        <div style={{ textAlign: "center", marginTop: "10px" }}>
          <button type="submit" style={{ width: "200px" }}>
            Submit Application
          </button>
        </div>
      </form>
    </div>
  );
}

export default App;
