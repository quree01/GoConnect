import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Permissions from "./components/Permissions";
import SelectionPage from "./components/SelectionPage";
import CabPriceComparison from "./components/CabPriceComparison";
import WalkingBuddyFinder from "./components/WalkingBuddyFinder";
import Rentals from "./components/Rentals";
import ShareTrips from "./components/ShareTrips";
import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/permissions" element={<Permissions />} />
        <Route path="/selection" element={<SelectionPage />} />
        <Route path="/compare" element={<CabPriceComparison />} />
        <Route path="/buddy-finder" element={<WalkingBuddyFinder />} />
        <Route path="/rentals" element={<Rentals />} />
        <Route path="/share-trips" element={<ShareTrips />} />
      </Routes>
    </Router>
  );
}

export default App;
