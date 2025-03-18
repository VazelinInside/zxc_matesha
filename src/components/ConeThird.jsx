import React, { useEffect, useState } from "react";
import UnitInput from "./UI/UnitInput";
import { UseConeThird } from "../hooks/useConeThird";
import AngleInput from "./UI/AngleInput";
import cone from "../photo/12типовая.png"
import Converter from "./UI/Сonverter";

const CONE = cone

const ConeThird = (props) => {
    const [radius, setRadius] = useState(1)
    const [radiusSqrt, setRadiusSqrt] = useState(1)
    const [angle, setAngle] = useState(1)
    const [squareFull, setSquareFull] = useState(0)
    const [btn, setBtn] = useState(false)
    const resolve = () => {
       return UseConeThird(radius, angle, setSquareFull) 
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
                <div className="block__resolve">
                    <img className="image" src={CONE}/>
                    <div className="resolve">
                        <h2 className="resolve__title">Решение</h2>
                        <p className="text">Sполн = {squareFull} см<sup>2</sup></p>
                    </div>
                </div>
                <div className="information">
                    <Converter/>
                    <p className="text">Образующая наклонена к плоскости основания под 
                        углом в {angle}<sup>o</sup> радиус равен {radius}√{radiusSqrt} см.</p>
                    <p className="text">Найти площадь полной поверхности.</p>
                    <form className="input">
                        <UnitInput 
                            parameters={'Радиус'} 
                            value={radius}
                            valueSqrt={radiusSqrt}
                            func={setRadius}
                            funcSqrt={setRadiusSqrt}/>
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

export default ConeThird;