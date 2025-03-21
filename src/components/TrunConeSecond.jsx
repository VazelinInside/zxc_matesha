import React, { useEffect, useState } from "react";
import UnitInput from "./UI/UnitInput";
import { UseTrunConeSecond } from "../hooks/useTrunConeSecond";
import AngleInput from "./UI/AngleInput";
import trunCone from "../photo/13типовая.png"
import Converter from "./UI/Сonverter";

const TRUNCONE = trunCone

const TrunConeSecond = (props) => {
    const [height, setHeight] = useState(1)
    const [radius, setRadius] = useState(1)
    const [heightSqrt, setHeightSqrt] = useState(1)
    const [radiusSqrt, setRadiusSqrt] = useState(1)
    const [angle, setAngle] = useState(1)
    const [volume, setVolume] = useState(0)
    const [squareFull, setSquareFull] = useState(0)
      
    useEffect(() => {
        return UseTrunConeSecond(radius, height, radiusSqrt, heightSqrt, angle, setVolume, setSquareFull) 
    }, [radius, height, radiusSqrt, heightSqrt, angle])

    return (
        <div className="block">
            <h1 className="title">Типовая задача №2 по теме "Усеченный конус"</h1>
            <div className="block__given">
                <div className="block__resolve">
                    <img className="image" src={TRUNCONE} alt=""/>
                    <div className="resolve">
                        <h2 className="resolve__title">Решение</h2>
                        <p className="text">V = {volume} см<sup>3</sup></p>
                        <p className="text">Sполн = {squareFull} см<sup>2</sup></p>
                    </div>
                </div>
                <div className="information">
                    <Converter/>
                    <p className="text">Радиус большего основания {radius}√{radiusSqrt} см, его высота {height}√{heightSqrt} см,
                    образующая наклонена к большему основанию под углом {angle}<sup>o</sup>.</p>
                    <p className="text">Найти объем, площадь полной поверхности.</p>
                    <form className="input">
                        <UnitInput 
                            parameters={'Радиус большего основания'} 
                            value={radius}
                            valueSqrt={radiusSqrt}
                            func={setRadius}
                            funcSqrt={setRadiusSqrt}/>
                        <UnitInput 
                            parameters={'Высота'} 
                            value={height}
                            valueSqrt={heightSqrt}
                            func={setHeight}
                            funcSqrt={setHeightSqrt}/>
                        <AngleInput 
                            parameters={'Угол'} 
                            value={angle} 
                            func={setAngle}/>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default TrunConeSecond;