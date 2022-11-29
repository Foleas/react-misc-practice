import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import CountryCapitalGame from "../exercises/CountryCapitalGame";

const App = () => {
  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/country-capital-game">Country Capital Game</Link>
          </li>
        </ul>

        <Routes>
          <Route
            path="/country-capital-game"
            element={<CountryCapitalGame />}
          />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
