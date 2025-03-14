import React, { useEffect, useState } from "react";
import UnitInput from "./UI/UnitInput";
import { UseSphere } from "../hooks/useSphere";
import sphere from "../photo/12типовая.png"

const SPHERE = sphere

const Sphere = (props) => {
    const [distance, setDistance] = useState('')
    const [radiusMini, setRadiusMini] = useState('')
    const [distanceUnit, setDistanceUnit] = useState('м')
    const [radiusMiniUnit, setRadiusMiniUnit] = useState('м')
    const [volume, setVolume] = useState(0)
    const [squareFull, setSquareFull] = useState(0)
    const [btn, setBtn] = useState(false)
    const resolve = () => {
       return UseSphere(distance, radiusMini, distanceUnit, radiusMiniUnit, setVolume, setSquareFull) 
    } 

    function btnResolve() {
        setBtn((btn) => !btn)
    }
      
    useEffect(() => {
        resolve()
    }, [btn])

    return (
        <div className="block">
            <h1 className="title">Типовая задача по теме: "Шар" №1</h1>
            <div className="block__given">
                <img className="image" src={SPHERE}/>
                <div className="information">
                    <p className="text">В шаре на расстоянии {distance} {distanceUnit} от центра проведена секущая плоскость так, 
                    что образовавшийся в сечении круг имеет радиус {radiusMini} {radiusMiniUnit}.</p>
                    <p className="text">Найти объем, площадь полной поверхности.</p>
                    <button className="button" onClick={() => btnResolve()}>Найти</button>
                </div>
            </div>
            <div className="block__resolve">
                <div>
                   <form className="input">
                        <UnitInput parameters={'Расстояние'} value={distance} funcLen={setDistanceUnit} func={setDistance}/>
                        <UnitInput parameters={'Радиус сечения'} value={radiusMini} funcLen={setRadiusMiniUnit} func={setRadiusMini}/>
                   </form>
                </div>
                <div className="resolve">
                    <h2 className="resolve__title">Решение</h2>
                    <p className="text">V = {volume} см<sup>3</sup></p>
                    <p className="text">Sполн = {squareFull} см<sup>2</sup></p>
                </div>
            </div>
        </div>
    );
};

export default Sphere;