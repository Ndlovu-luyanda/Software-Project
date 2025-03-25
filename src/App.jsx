import React from "react";
import { Routes, Route } from "react-router-dom";
import Deshboard from "./Deshboard";
import Business from "./Business";
import Health from "./Health";
import Education from "./Education";
import TertiaryEducation from "./TertiaryEducation"; // Import the Tertiary Education page

function App() {
  return (
    <Routes>
      <Route path="/" element={<Deshboard />} />
      <Route path="/business" element={<Business />} />
      <Route path="/health" element={<Health />} />
      <Route path="/education" element={<Education />} />
      <Route path="/tertiary-education" element={<TertiaryEducation />} /> {/* New route */}
    </Routes>
  );
}

export default App;
