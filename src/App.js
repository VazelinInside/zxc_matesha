import React, {useState } from "react";
import './styles/app.css'
import './styles/adaptive.css'
import Prizma from "./components/Prizma.jsx";
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
      const [activeComponent, setActiveComponent] = useState('prizma');

      const handleMenuClick = (componentName) => {
        setActiveComponent(componentName)
      };

      const components = {
        prizma: <Prizma/>,
        prizmaSecond: <PrizmaSecond/>,
        pyramid: <Pyramid/>,
        pyramidSecond: <PyramidSecond/>,
        pyramidThird: <PyramidThird/>,
        trunPiramid: <TrunPiramid/>,
        trunPiramidSecond: <TrunPiramidSecond/>,
        cylinder: <Cylinder/>,
        cylinderSecond: <CylinderSecond/>,
        cone: <Cone/>,
        coneSecond: <ConeSecond/>,
        coneThird: <ConeThird/>,
        trunCone: <TrunCone/>,
        trunConeSecond: <TrunConeSecond/>,
        sphere: <Sphere/>,
      }

  return (
    <div className="App">
      <ul className="menu">
        <li onClick={() => handleMenuClick('prizma')} className="menu__item">"Призма" №1</li>
        <li onClick={() => handleMenuClick('prizmaSecond')} className="menu__item">"Призма" №2</li>
        <li onClick={() => handleMenuClick('pyramid')} className="menu__item">"Пирамида" №1</li>
        <li onClick={() => handleMenuClick('pyramidSecond')} className="menu__item">"Пирамида" №2</li>
        <li onClick={() => handleMenuClick('pyramidThird')} className="menu__item">"Пирамида" №3</li>
        <li onClick={() => handleMenuClick('trunPiramid')} className="menu__item">"Усеченная пирамида" №1</li>
        <li onClick={() => handleMenuClick('trunPiramidSecond')} className="menu__item">"Усеченная пирамида" №2</li>
        <li onClick={() => handleMenuClick('cylinder')} className="menu__item">"Цилиндр" №1</li>
        <li onClick={() => handleMenuClick('cylinderSecond')} className="menu__item">"Цилиндр" №2</li>
        <li onClick={() => handleMenuClick('cone')} className="menu__item">"Конус" №1</li>
        <li onClick={() => handleMenuClick('coneSecond')} className="menu__item">"Конус" №2</li>
        <li onClick={() => handleMenuClick('coneThird')} className="menu__item">"Конус" №3</li>
        <li onClick={() => handleMenuClick('trunCone')} className="menu__item">"Усеченный конус" №1</li>
        <li onClick={() => handleMenuClick('trunConeSecond')} className="menu__item">"Усеченный конус" №2</li>
        <li onClick={() => handleMenuClick('sphere')} className="menu__item">"Шар" №1</li>
      </ul>
      {components[activeComponent]}
    </div>
  );
}

export default App;
