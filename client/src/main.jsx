import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
// import { Route, Routes, BrowserRouter } from "react-router-dom";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "./Pages/Home.jsx";
import About from "./Pages/About.jsx"; 
import Navbar from "./Components/Navbar.jsx";
import Footer from "./Components/Footer.jsx";
import TestingFacilities from "./Pages/TestingFacilities.jsx";
import NewsEvents from "./Pages/NewsEvents.jsx";
import Contact from "./Pages/Contact.jsx";
import DSC from "./Components/Testings/DSC.jsx";
import FTIR from "./Components/Testings/FTIR.jsx";
import AbrasiveCuttingMachine from "./Components/Testings/AbrasiveCuttingMachine.jsx";
import CryoMill from "./Components/Testings/CryoMill.jsx";
import DoubleDiscPolishingMachine from "./Components/Testings/DoubleDiscPolishingMachine.jsx";
import InjectionModelingMachine from "./Components/Testings/InjectionModelingMachine.jsx";
import MeltFlowTester from "./Components/Testings/MeltFlowTester.jsx";
import MicroVickerHardnessTester from "./Components/Testings/MicroVickerHardnessTester.jsx";
import Printer from "./Components/Testings/Printer.jsx";
import Tribometer from "./Components/Testings/Tribometer.jsx";
import TwinScrewExtruder from "./Components/Testings/TwinScrewExtruder.jsx";
import UniversalTensilTester from "./Components/Testings/UniversalTensilTester.jsx";
import VapourSmoothening from "./Components/Testings/VapourSmoothening.jsx";
import QueryForm from "./Pages/QueryForm.jsx";
import AirJetErosionTester from "./Components/Testings/AirJetErosionTester.jsx";
import DigitalMicrometer from "./Components/Testings/DigitalMicrometer.jsx";
import DigitalVernierCaliper from "./Components/Testings/DigitalVernierCaliper.jsx";
import FLIRThermometer from "./Components/Testings/FLIRThermometer.jsx";
import HotAirOven from "./Components/Testings/HotAirOven.jsx";
import MetallographicHotMountingPress from "./Components/Testings/MetallographicHotMountingPress.jsx";
import MetallurgicalSampleSaw from "./Components/Testings/MetallurgicalSampleSaw.jsx";
import PedestalGrinder from "./Components/Testings/PedestalGrinder.jsx";
import SieveShaker from "./Components/Testings/SieveShaker.jsx";
import ToolMakerMcroscope from "./Components/Testings/ToolMakerMcroscope.jsx";
import UniversalMillingMachine from "./Components/Testings/UniversalMillingMachine.jsx";
import VibratoryFinishingMachine from "./Components/Testings/VibratoryFinishingMachine.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
<React.StrictMode>
  <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/about" element={<About />} />
      <Route path="/testing" element={<TestingFacilities />} />
      <Route path="/news-events" element={<NewsEvents />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/dsc" element={<DSC />} />
      <Route path="/ftir" element={<FTIR />} />
      <Route path="/abrasive-cutting-machine" element={<AbrasiveCuttingMachine />} />
      <Route path="/cryo-mill" element={<CryoMill />} />
      <Route path="/double-disc-polishing-machine" element={<DoubleDiscPolishingMachine />} />
      <Route path="/injection-modeling-machine" element={<InjectionModelingMachine />} />
      <Route path="/melt-flow-tester" element={<MeltFlowTester />} />
      <Route path="/micro-vector-hardness-tester" element={<MicroVickerHardnessTester />} />
      <Route path="/printer" element={<Printer />} />
      <Route path="/tribometer" element={<Tribometer />} />
      <Route path="/twin-screw-extruder" element={<TwinScrewExtruder />} />
      <Route path="/universal-tensil-tester" element={<UniversalTensilTester />} />
      <Route path="/vapour-smoothening" element={<VapourSmoothening />} />
      <Route path="/air-jet-erosion-tester" element={<AirJetErosionTester />} />
      <Route path="/digital-micrometer" element={<DigitalMicrometer />} />
      <Route path="/digital-vernier-caliper" element={<DigitalVernierCaliper />} />
      <Route path="/flir-thermometer" element={<FLIRThermometer />} />
      <Route path="/hot-air-oven" element={<HotAirOven />} />
      <Route path="/metallographic-hot-mounting-press" element={<MetallographicHotMountingPress />} />
      <Route path="/metallurgical-sample-saw" element={<MetallurgicalSampleSaw />} />
      <Route path="/pedestal-grinder" element={<PedestalGrinder/>} />
      <Route path="/sieve-shaker" element={<SieveShaker />} />
      <Route path="/tool-maker-mcroscope" element={<ToolMakerMcroscope />} />
      <Route path="/universal-milling-machine" element={<UniversalMillingMachine />} />
      <Route path="/vibratory-finishing-machine" element={<VibratoryFinishingMachine />} />
      <Route path="/queryform" element={<QueryForm />} />
      <Route index element={<Home />} />
    </Routes>
    <Footer />
  </BrowserRouter>
</React.StrictMode>
);
