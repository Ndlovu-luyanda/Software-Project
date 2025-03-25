import React from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate for navigation

function Deshboard() {
  const navigate = useNavigate(); // Initialize the navigate function

  const handleNavigation = (event) => {
    const selectedPage = event.target.value; // Get the selected value from the dropdown
    if (selectedPage) {
      navigate(selectedPage); // Navigate to the selected page
    }
  };

  return (
    <div>
      <div className="header">
        <div className="logo">Local News Portal</div>

        {/* Dropdown Menu */}
        <div className="dropdown-container">
          <select className="dropdown-menu" onChange={handleNavigation}>
            <option value="">Menu</option> {/* Default option */}
            <option value="/education">Education</option>
            <option value="/business">Business</option>
            <option value="/health">Health</option>
            <option value="/municipality">Municipality</option>
            <option value="/electricity">Electricity</option>
            <option value="/crime">Crime</option>
          </select>
        </div>
      </div>

      {/* Table Section */}
      <div className="content">
        <div className="table-container">
          <table>
            <thead>
              <tr>
                <th>Date</th>
                <th>News Event</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Tue 18th Feb 2025</td>
                <td>
                  2025 NQF Level 8 Scholarship Programme{" "}
                  <a href="#">(Download File)</a>
                  <br />
                  <select>
                    <option value="afrikaans">Afrikaans</option>
                    <option value="xhosa">Xhosa</option>
                    <option value="zulu">Zulu</option>
                  </select>
                </td>
              </tr>
              <tr>
                <td>Fri 31st Jan 2025</td>
                <td>
                  Faculty of ICT Timetables S1/2025 - Diploma courses{" "}
                  <a href="#">(Download File)</a>
                  <br />
                  <select>
                    <option value="afrikaans">Afrikaans</option>
                    <option value="xhosa">Xhosa</option>
                    <option value="zulu">Zulu</option>
                  </select>
                </td>
              </tr>
              <tr>
                <td>Fri 31st Jan 2025</td>
                <td>
                  Faculty of ICT Timetables S1/2025 - AdvDip and PGDip courses{" "}
                  <a href="#">(Download File)</a>
                </td>
              </tr>
              <tr>
                <td>Fri 31st Jan 2025</td>
                <td>
                  Faculty of ICT - Timetable Template 2025{" "}
                  <a href="#">(Download File)</a>
                  <br />
                  <select>
                    <option value="afrikaans">Afrikaans</option>
                    <option value="xhosa">Xhosa</option>
                    <option value="zulu">Zulu</option>
                  </select>
                </td>
              </tr>
              <tr>
                <td>Fri 31st Jan 2025</td>
                <td>
                  Faculty of ICT Schedule for S1/2025{" "}
                  <a href="#">(Download File)</a>
                  <br />
                  <select>
                    <option value="afrikaans">Afrikaans</option>
                    <option value="xhosa">Xhosa</option>
                    <option value="zulu">Zulu</option>
                  </select>
                </td>
              </tr>
              <tr>
                <td>Thu 23rd Jan 2025</td>
                <td>
                  Faculty_of_ICT_2025_S1_Schedule_ver_2024-12-02{" "}
                  <a href="#">(Download File)</a>
                  <br />
                  <select>
                    <option value="afrikaans">Afrikaans</option>
                    <option value="xhosa">Xhosa</option>
                    <option value="zulu">Zulu</option>
                  </select>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Deshboard;