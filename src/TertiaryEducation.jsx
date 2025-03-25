import React from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate for navigation
import GraduationCap from "./icons/graduation-cap-solid.svg"; // Import the icon

function TertiaryEducation() {
  const navigate = useNavigate(); // Initialize the navigate function

  return (
    <div className="tertiary-container">
      <h1>
        <img
          src={GraduationCap}
          alt="Graduation Cap Icon"
          className="education-icon"
        />
        Tertiary Education: Stay Updated with Career27
      </h1>
      <p>
        Are you a university student looking for Work Integrated Learning (WIL),
        internships, or graduate job opportunities? Finding reliable updates and
        opportunities can be tough — but Career27 makes it easier! This platform
        is designed to connect students with the latest vacancies, bursaries, and
        workplace training programs across South Africa.
      </p>

      <section className="tertiary-section">
        <h3>What is Career27?</h3>
        <p>
          Career27 is an online platform that posts verified opportunities for
          students and recent graduates. Whether you need to complete your WIL
          requirement or are looking for your first internship or graduate job,
          Career27 provides updated listings in various fields, including:
        </p>
        <ul>
          <li>Engineering</li>
          <li>Information Technology (IT)</li>
          <li>Business and Finance</li>
          <li>Health Sciences</li>
          <li>Public Administration</li>
        </ul>
      </section>

      <section className="tertiary-section">
        <h3>Why Use Career27?</h3>
        <p>✅ Features:</p>
        <ul>
          <li>Daily updates on WIL programmes, internships, learnerships, and job vacancies.</li>
          <li>Direct links to application forms and official websites.</li>
          <li>Information on application deadlines, requirements, and how to apply.</li>
          <li>Opportunities from companies like NECSA, Eskom, Transnet, Telkom, and more.</li>
        </ul>
      </section>

      <section className="tertiary-section">
        <h3>Example Opportunity: 2025 NECSA Group WIL Programme</h3>
        <p>
          One of the latest listings on Career27 is the 2025 NECSA Group Work
          Integrated Learning (WIL) Programme.
        </p>
        <ul>
          <li><strong>Fields Required:</strong> Chemical, Electrical, Mechanical Engineering; IT; Health & Safety.</li>
          <li><strong>Location:</strong> Pelindaba, Gauteng.</li>
          <li><strong>Requirements:</strong> Proof of WIL requirement, academic transcripts, ID, CV.</li>
          <li><strong>Deadline:</strong> 30 March 2025.</li>
        </ul>
        <p>
          <a
            href="https://career27.co.za"
            target="_blank"
            rel="noopener noreferrer"
          >
            Apply Here: Click to view full details and apply
          </a>
        </p>
      </section>

      <section className="tertiary-section">
        <h3>How to Use Career27</h3>
        <ol>
          <li>Go to <a href="https://career27.co.za" target="_blank" rel="noopener noreferrer">https://career27.co.za</a>.</li>
          <li>Browse through the latest opportunities or search by keyword (e.g., "IT internship").</li>
          <li>Click on the listing to view full details and application instructions.</li>
          <li>Apply before the deadline and prepare required documents.</li>
        </ol>
      </section>

      <section className="tertiary-section">
        <h3>Conclusion</h3>
        <p>
          As a university student, staying informed about career opportunities is
          crucial. Bookmark Career27 and check it regularly to never miss an
          opportunity. It’s a valuable tool for all students, especially those in
          need of WIL placements or internships to complete their studies.
        </p>
        <p>
          <strong>Pro Tip:</strong> Set up a reminder to check Career27 every Monday
          for fresh listings and plan your applications early!
        </p>
      </section>

      {/* Back Button */}
      <div className="navigation-buttons">
        <button
          className="back-button"
          onClick={() => navigate("/education")} // Navigate back to the Education page
        >
          Back to Education
        </button>
      </div>
    </div>
  );
}

export default TertiaryEducation;