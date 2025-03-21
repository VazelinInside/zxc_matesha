import React, { useEffect, useState } from "react";
import UnitInput from "./UI/UnitInput";
import { UseSphereSecond } from "../hooks/useSphereSecond";
import sphere from "../photo/14типовая.png"
import Converter from "./UI/Сonverter";

const SPHERE = sphere

const SphereSecond = (props) => {
    const [distance, setDistance] = useState(1)
    const [radius, setRadius] = useState(1)
    const [distanceSqrt, setDistanceSqrt] = useState(1)
    const [radiusSqrt, setRadiusSqrt] = useState(1)
    const [squareSecant, setSquareSecant] = useState(0)

    useEffect(() => {
        return UseSphereSecond(distance, radius, distanceSqrt, radiusSqrt, setSquareSecant) 
    }, [distance, radius, distanceSqrt, radiusSqrt])

    return (
        <div className="block">
            <h1 className="title">Типовая задача №2 по теме "Шар"</h1>
            <div className="block__given">
                <div className="block__resolve">
                    <img className="image" src={SPHERE} alt=""/>
                    <div className="resolve">
                        <h2 className="resolve__title">Решение</h2>
                        <p className="text">Sсеч = {squareSecant} см<sup>2</sup></p>
                    </div>
                </div>
                <div className="information">
                    <Converter/>
                    <p className="text">В шаре на расстоянии {distance}√{distanceSqrt} см от центра проведена секущая плоскость, 
                    радиус шара составляет {radius}√{radiusSqrt} см.</p>
                    <p className="text">Найти площадь секущей плоскости.</p>
                    <form className="input">
                        <UnitInput 
                            parameters={'Расстояние'} 
                            value={distance} 
                            valueSqrt={distanceSqrt} 
                            func={setDistance} 
                            funcSqrt={setDistanceSqrt}/>
                        <UnitInput 
                            parameters={'Радиус шара'} 
                            value={radius}
                            valueSqrt={radiusSqrt}
                            func={setRadius}
                            funcSqrt={setRadiusSqrt}/>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default SphereSecond;