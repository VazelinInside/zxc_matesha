import React, { useEffect, useState } from "react";
import UnitInput from "./UI/UnitInput";
import AngleInput from "./UI/AngleInput";
import { UsePyramidSecond } from "../hooks/usePyramidSecond";
import pyramid from "../photo/4типовая.png"
import Converter from "./UI/Сonverter";

const PYRAMID = pyramid

const PyramidSecond = (props) => {
    const [side, setSide] = useState(1)
    const [sideSqrt, setSideSqrt] = useState(1)
    const [angle, setAngle] = useState(1)
    const [volume, setVolume] = useState(0)
      
    useEffect(() => {
        return UsePyramidSecond(side, sideSqrt, angle, setVolume) 
    }, [side, sideSqrt, angle])

    return (
        <div className="block">
            <h1 className="title">Типовая задача по теме: "Пирамида" №2</h1>
            <div className="block__given">
                <div className="block__resolve">
                    <img className="image" src={PYRAMID} alt=""/>
                    <div className="resolve">
                        <h2 className="resolve__title">Решение</h2>
                        <p className="text">V = {volume} см<sup>3</sup></p>
                    </div>
                </div>
                <div className="information">
                    <Converter/>
                    <p className="text">В правильной трехугольной пирамиде боковое ребро {side}√{sideSqrt} см и 
                        составляет с плоскостью основания угол {angle}<sup>o</sup>.</p>
                    <p className="text">Найти объем.</p>
                    <form className="input">
                        <UnitInput 
                            parameters={'Боковое ребро'} 
                            value={side}
                            valueSqrt={sideSqrt}
                            func={setSide}
                            funcSqrt={setSideSqrt}/>
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

export default PyramidSecond;