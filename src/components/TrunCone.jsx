import React, { useEffect, useState } from "react";
import UnitInput from "./UI/UnitInput";
import { UseTrunCone } from "../hooks/useTrunCone";
import AngleInput from "./UI/AngleInput";
import trunCone from "../photo/13типовая.png"
import Converter from "./UI/Сonverter";

const TRUNCONE = trunCone

const TrunCone = (props) => {
    const [radius, setRadius] = useState(1)
    const [radiusSecond, setRadiusSecond] = useState(1)
    const [radiusSqrt, setRadiusSqrt] = useState(1)
    const [radiusSecondSqrt, setRadiusSecondSqrt] = useState(1)
    const [angle, setAngle] = useState(1)
    const [volume, setVolume] = useState(0)
    const [squareFull, setSquareFull] = useState(0)
    const [btn, setBtn] = useState(false)
    const resolve = () => {
       return UseTrunCone(radius, radiusSecond, radiusSqrt, radiusSecondSqrt, angle, setVolume, setSquareFull) 
    } 

    function btnResolve() {
        setBtn((btn) => !btn)
    }
      
    useEffect(() => {
        resolve()
    }, [btn])

    return (
        <div className="block">
            <h1 className="title">Типовая задача по теме: "Усеченный конус" №1</h1>
            <div className="block__given">
                <div className="block__resolve">
                    <img className="image" src={TRUNCONE}/>
                    <div className="resolve">
                        <h2 className="resolve__title">Решение</h2>
                        <p className="text">V = {volume} см<sup>3</sup></p>
                        <p className="text">Sполн = {squareFull} см<sup>2</sup></p>
                    </div>
                </div>
                <div className="information">
                    <Converter/>
                    <p className="text">Радиусы усеченного конуса {radius}√{radiusSqrt} см и {radiusSecond}√{radiusSecondSqrt} см,
                    образующая наклонена к большему основанию под углом {angle}<sup>o</sup>.</p>
                    <p className="text">Найти объем, площадь полной поверхности.</p>
                    <form className="input">
                        <UnitInput 
                            parameters={'Радиус меньшего основания'} 
                            value={radius} 
                            valueSqrt={radiusSqrt} 
                            func={setRadius} 
                            funcSqrt={setRadiusSqrt}/>
                        <UnitInput 
                            parameters={'Радиус большего основания'} 
                            value={radiusSecond}
                            valueSqrt={radiusSecondSqrt}
                            func={setRadiusSecond}
                            funcSqrt={setRadiusSecondSqrt}/>
                        <AngleInput 
                            parameters={'Угол'} 
                            value={angle} 
                            func={setAngle}/>
                    </form>
                    <button className="button" onClick={() => btnResolve()}>Найти</button>
                </div>
            </div>
        </div>
    );
};

export default TrunCone;