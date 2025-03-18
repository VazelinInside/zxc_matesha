import React, { useEffect, useState } from "react";
import UnitInput from "./UI/UnitInput";
import AngleInput from "./UI/AngleInput";
import { UsePyramidSecond } from "../hooks/usePyramidSecond";
import pyramid from "../photo/4типовая.png"
import Converter from "./UI/Сonverter";

const PYRAMID = pyramid

const PyramidSecond = (props) => {
    const [side, setSide] = useState('')
    const [angle, setAngle] = useState('')
    const [volume, setVolume] = useState(0)
    const [btn, setBtn] = useState(false)
    const resolve = () => {
       return UsePyramidSecond(side, angle, setVolume) 
    } 

    function btnResolve() {
        setBtn((btn) => !btn)
    }
      
    useEffect(() => {
        resolve()
    }, [btn])

    return (
        <div className="block">
            <h1 className="title">Типовая задача по теме: "Пирамида" №2</h1>
            <div className="block__given">
                <div className="block__resolve">
                    <img className="image" src={PYRAMID}/>
                    <div className="resolve">
                        <h2 className="resolve__title">Решение</h2>
                        <p className="text">V = {volume} см<sup>3</sup></p>
                    </div>
                </div>
                <div className="information">
                    <Converter/>
                    <p className="text">В правильной трехугольной пирамиде боковое ребро {side} см и составляет с плоскостью основания угол {angle}<sup>o</sup>.</p>
                    <p className="text">Найти объем.</p>
                    <form className="input">
                        <UnitInput parameters={'Боковое ребро'} value={side} func={setSide}/>
                        <AngleInput parameters={'Угол'} value={angle} func={setAngle}/>
                    </form>
                    <button className="button" onClick={() => btnResolve()}>Найти</button>
                </div>
            </div>
        </div>
    );
};

export default PyramidSecond;