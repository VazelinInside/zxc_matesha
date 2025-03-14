import React from "react";
import Prizma from "./components/Prizma.jsx";
import './styles/app.css'
import PrizmaSecond from "./components/PrizmaSecond.jsx";
import Pyramid from "./components/Pyramid.jsx";
import PyramidSecond from "./components/PyramidSecond.jsx";
import PyramidThird from "./components/PyramidThird.jsx";
import TrunPiramid from "./components/TrunPiramid.jsx";
import TrunPiramidSecond from "./components/TrunPiramidSecond.jsx";
import Cylinder from "./components/Cylinder.jsx";
import CylinderSecond from "./components/CylinderSecond.jsx";
import Cone from "./components/Cone.jsx";
import ConeSecond from "./components/ConeSecons.jsx";
import ConeThird from "./components/ConeThird.jsx";
import TrunCone from "./components/TrunCone.jsx";
import TrunConeSecond from "./components/TrunConeSecond.jsx";
import Sphere from "./components/Sphere.jsx";

function App() {
  return (
    <div className="App">
      <Prizma/>
      <PrizmaSecond/>
      <Pyramid/>
      <PyramidSecond/>
      <PyramidThird/>
      <TrunPiramid/>
      <TrunPiramidSecond/>
      <Cylinder/>
      <CylinderSecond/>
      <Cone/>
      <ConeSecond/>
      <ConeThird/>
      <TrunCone/>
      <TrunConeSecond/>
      <Sphere/>
    </div>
  );
}

export default App;
