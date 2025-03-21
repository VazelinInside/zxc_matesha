import React, { useEffect, useState } from "react";
import UnitInput from "./UI/UnitInput";
import { UseSphere } from "../hooks/useSphere";
import sphere from "../photo/14типовая.png"
import Converter from "./UI/Сonverter";

const SPHERE = sphere

const Sphere = (props) => {
    const [distance, setDistance] = useState(1)
    const [radiusMini, setRadiusMini] = useState(1)
    const [distanceSqrt, setDistanceSqrt] = useState(1)
    const [radiusMiniSqrt, setRadiusMiniSqrt] = useState(1)
    const [volume, setVolume] = useState(0)
    const [squareFull, setSquareFull] = useState(0)
      
    useEffect(() => {
        return UseSphere(distance, radiusMini, distanceSqrt, radiusMiniSqrt, setVolume, setSquareFull) 
    }, [distance, radiusMini, distanceSqrt, radiusMiniSqrt])

    return (
        <div className="block">
            <h1 className="title">Типовая задача №1 по теме "Шар"</h1>
            <div className="block__given">
                <div className="block__resolve">
                    <img className="image" src={SPHERE} alt=""/>
                    <div className="resolve">
                        <h2 className="resolve__title">Решение</h2>
                        <p className="text">V = {volume} см<sup>3</sup></p>
                        <p className="text">Sполн = {squareFull} см<sup>2</sup></p>
                    </div>
                </div>
                <div className="information">
                    <Converter/>
                    <p className="text">В шаре на расстоянии {distance}√{distanceSqrt} см от центра проведена секущая плоскость так, 
                    что образовавшийся в сечении круг имеет радиус {radiusMini}√{radiusMiniSqrt} см.</p>
                    <p className="text">Найти объем, площадь полной поверхности.</p>
                    <form className="input">
                        <UnitInput 
                            parameters={'Расстояние'} 
                            value={distance} 
                            valueSqrt={distanceSqrt} 
                            func={setDistance} 
                            funcSqrt={setDistanceSqrt}/>
                        <UnitInput 
                            parameters={'Радиус сечения'} 
                            value={radiusMini}
                            valueSqrt={radiusMiniSqrt}
                            func={setRadiusMini}
                            funcSqrt={setRadiusMiniSqrt}/>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Sphere;