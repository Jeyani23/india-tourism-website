import React from "react";
import { Routes, Route } from "react-router-dom";

// Standard Pages
import Home from "./pages/Home";
import Login from "./pages/Login";
import RegisterStep1 from "./pages/RegisterStep1";
import Explore from "./pages/Explore";
import ARView from "./pages/ARView";
import Map from "./pages/Map";
import Features from "./pages/Features";
import VisitorSupportModule from "./pages/VisitorSupportModule";
import VRWrapper from "./pages/VRWrapper";
// 1. Import the AI Photo Guide
import AiPhotoGuide from "./pages/AiGuide"; 

// AR Monument Pages
import TajMahalAR from "./pages/TajMahalAR";
import RamMandirAR from "./pages/RamMandirAR";
import IndiaGateAR from "./pages/IndiaGateAR";
import GatewayInAR from "./pages/GatewayInAR";
import CharminarAR from "./pages/CharminarAR";
import LotusAR from "./pages/LotusAR";
import SunTempleAR from "./pages/SunTempleAR";

function App() {
  return (
    <Routes>
      {/* General Navigation */}
      <Route path="/" element={<Login />} />
      <Route path="/register" element={<RegisterStep1 />} />
<Route path="/home" element={<Home />} />
      <Route path="/explore" element={<Explore />} />
      <Route path="/map" element={<Map />} />
      
      {/* 2. Add the AI Photo Guide Route */}
      {/* comment */}
<Route path="/aiguide" element={<AiPhotoGuide />} />
<Route path="/vrview" element={<VRWrapper />} />

      {/* AR Selection Gallery */}
      <Route path="/ar" element={<ARView />} />

      {/* Specific AR Monument Routes */}
      <Route path="/ar/tajmahal" element={<TajMahalAR />} />
      <Route path="/ar/ram" element={<RamMandirAR />} />
      <Route path="/ar/ingate" element={<IndiaGateAR />} />
      <Route path="/ar/gatein" element={<GatewayInAR />} />
      <Route path="/ar/charmi" element={<CharminarAR />} />
      <Route path="/ar/lotus" element={<LotusAR />} />
      <Route path="/ar/suntemp" element={<SunTempleAR />} />
      
      <Route path="/features" element={<Features />} />
      <Route path="/visitor-support" element={<VisitorSupportModule />} />
    </Routes>
  );
}

export default App;