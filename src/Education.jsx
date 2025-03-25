import React from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate for navigation
import GraduationCap from "./icons/graduation-cap-solid.svg"; // Import the icon

function Education() {
  const navigate = useNavigate(); // Initialize the navigate function

  return (
    <div>
      <h1 className="education-container">
        <img
          src={GraduationCap}
          alt="Graduation Cap Icon"
          className="education-icon"
        />
        Education Updates
      </h1>

      <h2>Scholarship Alert: Future Leaders Bursary</h2>
      <p>
        The bursary is funded by the Department of Education and aims to help
        students who show academic potential but lack the financial means to
        continue their studies.
      </p>

      <section className="education-section">
        <h3>Who Can Apply?</h3>
        <ul>
          <li>Grade 12 students in 2025.</li>
          <li>Must have an average of 60% or higher.</li>
          <li>Combined family income below R350,000 per year.</li>
          <li>South African citizen with a valid ID.</li>
        </ul>
      </section>

      <section className="education-section">
        <h3>Fields of Study Covered</h3>
        <ul>
          <li>Teaching</li>
          <li>Engineering</li>
          <li>Health Sciences (e.g., Nursing, Medicine)</li>
          <li>Information Technology (IT)</li>
          <li>Business Studies</li>
        </ul>
      </section>

      <section className="education-section">
        <h3>What Does the Bursary Cover?</h3>
        <ul>
          <li>Full tuition fees.</li>
          <li>Accommodation and meals.</li>
          <li>Study materials (textbooks, laptop).</li>
          <li>Monthly stipend for transport and personal needs.</li>
        </ul>
      </section>

      <section className="education-section">
        <h3>Application Deadline</h3>
        <p>
          <strong>31 May 2025</strong> – Late applications will not be considered.
        </p>
      </section>

      <section className="education-section">
        <h3>How to Apply</h3>
        <ol>
          <li>
            Visit the website:{" "}
            <a
              href="https://www.bursariesportal.co.za/"
              target="_blank"
              rel="noopener noreferrer"
            >
              www.bursariesportal.co.za
            </a>
          </li>
          <li>Download the application form.</li>
          <li>Submit your ID copy, Grade 11 final report, and proof of income.</li>
          <li>
            Complete the motivation essay (200 words: “Why I deserve this
            bursary”).
          </li>
        </ol>
      </section>

      <section className="education-section">
        <h3>Assistance with Applications</h3>
        <p>
          Students can get help from the school’s career office. A bursary
          workshop will be held at the school hall on <strong>10 April 2025</strong>.
        </p>
      </section>

      {/* Additional Resources Section */}
      <section className="education-section">
        <h3>Additional Resources</h3>
        <p>
          <strong>Conclusion:</strong> Don’t miss this life-changing opportunity! If you meet the criteria, apply early and ensure all documents are submitted correctly. For help, speak to Mr. Mokoena in the career office or email{" "}
          <a href="mailto:bursaryhelp@school.org.za">bursaryhelp@school.org.za</a>.
        </p>
        <blockquote>
          <p>
            “This bursary changed my life – I’m now studying Engineering with no
            financial stress,”
          </p>
          <footer>– Nomsa Dlamini, 2023 Bursary Recipient</footer>
        </blockquote>
      </section>

      {/* Navigation Buttons */}
      <div className="navigation-buttons">
        <button
          className="back-button"
          onClick={() => navigate("/")} // Navigate back to the home page
        >
          Back to Home
        </button>
        <button
          className="next-button"
          onClick={() => navigate("/tertiary-education")} // Navigate to the Tertiary Education page
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default Education;
