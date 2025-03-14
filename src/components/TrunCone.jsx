import React, { useEffect, useState } from "react";
import UnitInput from "./UI/UnitInput";
import { UseTrunCone } from "../hooks/useTrunCone";
import AngleInput from "./UI/AngleInput";
import trunCone from "../photo/11типовая.png"

const TRUNCONE = trunCone

const TrunCone = (props) => {
    const [radius, setRadius] = useState('')
    const [radiusSecond, setRadiusSecond] = useState('')
    const [angle, setAngle] = useState('')
    const [radiusUnit, setRadiusUnit] = useState('м')
    const [radiusSecondUnit, setRadiusSecondUnit] = useState('м')
    const [volume, setVolume] = useState(0)
    const [squareFull, setSquareFull] = useState(0)
    const [btn, setBtn] = useState(false)
    const resolve = () => {
       return UseTrunCone(radius, radiusUnit, radiusSecond, radiusSecondUnit, angle, setVolume, setSquareFull) 
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
                <img className="image" src={TRUNCONE}/>
                <div className="information">
                    <p className="text">Радиусы усеченного конуса {radius} {radiusUnit} и {radiusSecond} {radiusSecondUnit},
                    образующая наклонена к большему основанию под углом {angle}<sup>o</sup>.</p>
                    <p className="text">Найти объем, площадь полной поверхности.</p>
                    <button className="button" onClick={() => btnResolve()}>Найти</button>
                </div>
            </div>
            <div className="block__resolve">
                <div>
                   <form className="input">
                        <UnitInput parameters={'Радиус меньшего основания'} value={radius} funcLen={setRadiusUnit} func={setRadius}/>
                        <UnitInput parameters={'Радиус большего основания'} value={radiusSecond} funcLen={setRadiusSecondUnit} func={setRadiusSecond}/>
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

export default TrunCone;