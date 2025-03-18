import React, { useEffect, useState } from "react";
import { UseVolumePrizma } from "../hooks/usePrizmaSecond";
import AngleInput from "./UI/AngleInput";
import UnitInput from "./UI/UnitInput";
import prizma from "../photo/2типовая.png"
import Converter from "./UI/Сonverter";

const PRIZMA = prizma

const PrizmaSecond = (props) => {
    const [length, setLength] = useState('')
    const [width, setWidth] = useState('')
    const [angle, setAngle] = useState('')
    const [square, setSquare] = useState('')
    const [volume, setVolume] = useState(0)
    const [btn, setBtn] = useState(false)
    const resolve = () => {
       return UseVolumePrizma(length, width, angle, square, setVolume) 
    } 

    function btnResolve() {
        setBtn((btn) => !btn)
    }
      
    useEffect(() => {
        resolve()
    }, [btn])

    return (
        <div className="block">
            <h1 className="title">Типовая задача по теме: "Призма" №2</h1>
            <div className="block__given">
                <div className="block__resolve">
                    <img className="image" src={PRIZMA}/>
                    <div className="resolve">
                        <h2 className="resolve__title">Решение</h2>
                        <p className="text">V = {volume} см<sup>3</sup></p>
                    </div>
                </div>
                <div className="information">
                    <Converter/>
                    <p className="text">В прямом парарллелепипеде стороны основания {length} см и {width} см, угол между ними {angle}<sup>o</sup>.</p>
                    <p className="text">Найти объём параллелепипеда, если площадь боковой поверхности его {square} см<sup>2</sup>.</p>
                    <form className="input">
                        <UnitInput parameters={'Длина'} value={length} func={setLength}/>
                        <UnitInput parameters={'Ширина'} value={width} func={setWidth}/>
                        <AngleInput parameters={'Угол'} value={angle} func={setAngle}/>
                        <UnitInput parameters={'Площадь'} value={square} func={setSquare}/>
                    </form>
                    <button className="button" onClick={() => btnResolve()}>Найти</button>
                </div>
            </div>
        </div>
    );
};

export default PrizmaSecond;