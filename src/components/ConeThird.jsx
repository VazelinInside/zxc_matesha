import React, { useEffect, useState } from "react";
import UnitInput from "./UI/UnitInput";
import { UseConeThird } from "../hooks/useConeThird";
import AngleInput from "./UI/AngleInput";
import cone from "../photo/10типовая.png"

const CONE = cone

const ConeThird = (props) => {
    const [radius, setRadius] = useState('')
    const [angle, setAngle] = useState('')
    const [radiusUnit, setRadiusUnit] = useState('м')
    const [volume, setVolume] = useState(0)
    const [btn, setBtn] = useState(false)
    const resolve = () => {
       return UseConeThird(radius, radiusUnit, angle, setVolume) 
    } 

    function btnResolve() {
        setBtn((btn) => !btn)
    }
      
    useEffect(() => {
        resolve()
    }, [btn])

    return (
        <div className="block">
            <h1 className="title">Типовая задача по теме: "Конус" №3</h1>
            <div className="block__given">
                <img className="image" src={CONE}/>
                <div className="information">
                    <p className="text">Образующая наклонена к плоскости основания под углом в {angle}<sup>o</sup> радиус равен {radius} {radiusUnit}.</p>
                    <p className="text">Найти площадь полной поверхности.</p>
                    <button className="button" onClick={() => btnResolve()}>Найти</button>
                </div>
            </div>
            <div className="block__resolve">
                <div>
                   <form className="input">
                        <UnitInput parameters={'Радиус'} value={radius} funcLen={setRadiusUnit} func={setRadius}/>
                        <AngleInput parameters={'Угол'} value={angle} func={setAngle}/>
                   </form>
                </div>
                <div className="resolve">
                    <h2 className="resolve__title">Решение</h2>
                    <p className="text">Объем = {volume} см<sup>3</sup></p>
                </div>
            </div>
        </div>
    );
};

export default ConeThird;