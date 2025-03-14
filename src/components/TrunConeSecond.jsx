import React, { useEffect, useState } from "react";
import UnitInput from "./UI/UnitInput";
import { UseTrunConeSecond } from "../hooks/useTrunConeSecond";
import AngleInput from "./UI/AngleInput";
import trunCone from "../photo/11типовая.png"

const TRUNCONE = trunCone

const TrunConeSecond = (props) => {
    const [height, setHeight] = useState('')
    const [radius, setRadius] = useState('')
    const [angle, setAngle] = useState('')
    const [heightUnit, setHeightUnit] = useState('м')
    const [radiusUnit, setRadiusUnit] = useState('м')
    const [volume, setVolume] = useState(0)
    const [squareFull, setSquareFull] = useState(0)
    const [btn, setBtn] = useState(false)
    const resolve = () => {
       return UseTrunConeSecond(radius, radiusUnit, height, heightUnit, angle, setVolume, setSquareFull) 
    } 

    function btnResolve() {
        setBtn((btn) => !btn)
    }
      
    useEffect(() => {
        resolve()
    }, [btn])

    return (
        <div className="block">
            <h1 className="title">Типовая задача по теме: "Усеченный конус" №2</h1>
            <div className="block__given">
                <img className="image" src={TRUNCONE}/>
                <div className="information">
                    <p className="text">Радиус большего основания {radius} {radiusUnit}, его высота {height} {heightUnit},
                    образующая наклонена к большему основанию под углом {angle}<sup>o</sup>.</p>
                    <p className="text">Найти объем, площадь полной поверхности.</p>
                    <button className="button" onClick={() => btnResolve()}>Найти</button>
                </div>
            </div>
            <div className="block__resolve">
                <div>
                   <form className="input">
                        <UnitInput parameters={'Радиус большего основания'} value={radius} funcLen={setRadiusUnit} func={setRadius}/>
                        <UnitInput parameters={'Высота'} value={height} funcLen={setHeightUnit} func={setHeight}/>
                        <AngleInput parameters={'Угол'} value={angle} func={setAngle}/>
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

export default TrunConeSecond;