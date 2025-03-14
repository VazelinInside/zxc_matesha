import React, { useEffect, useState } from "react";
import UnitInput from "./UI/UnitInput";
import AngleInput from "./UI/AngleInput";
import { UsePyramidSecond } from "../hooks/usePyramidSecond";
import pyramid from "../photo/13типовая.png"

const PYRAMID = pyramid

const PyramidSecond = (props) => {
    const [side, setSide] = useState('')
    const [sideUnit, setSideUnit] = useState('м')
    const [angle, setAngle] = useState('')
    const [volume, setVolume] = useState(0)
    const [btn, setBtn] = useState(false)
    const resolve = () => {
       return UsePyramidSecond(side, sideUnit, angle, setVolume) 
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
                <img className="image" src={PYRAMID}/>
                <div className="information">
                    <p className="text">В правильной трехугольной пирамиде боковое ребро {side} {sideUnit} и составляет с плоскостью основания угол {angle}<sup>o</sup>.</p>
                    <p className="text">Найти объем.</p>
                    <button className="button" onClick={() => btnResolve()}>Найти</button>
                </div>
            </div>
            <div className="block__resolve">
                <div>
                   <form className="input">
                        <UnitInput parameters={'Боковое ребро'} value={side} funcLen={setSideUnit} func={setSide}/>
                        <AngleInput parameters={'Угол'} value={angle} func={setAngle}/>
                   </form>
                </div>
                <div className="resolve">
                    <h2 className="resolve__title">Решение</h2>
                    <p className="text">V = {volume} см<sup>3</sup></p>
                </div>
            </div>
        </div>
    );
};

export default PyramidSecond;