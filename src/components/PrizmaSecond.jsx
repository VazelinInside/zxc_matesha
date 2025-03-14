import React, { useEffect, useState } from "react";
import { UseVolumePrizma } from "../hooks/usePrizmaSecond";
import AngleInput from "./UI/AngleInput";
import UnitInput from "./UI/UnitInput";
import prizma from "../photo/2типовая.png"

const PRIZMA = prizma

const PrizmaSecond = (props) => {
    const [length, setLength] = useState('')
    const [width, setWidth] = useState('')
    const [angle, setAngle] = useState('')
    const [square, setSquare] = useState('')
    const [lengthUnit, setLengtUnit] = useState('м')
    const [widthUnit, setWidthUnit] = useState('м')
    const [squareUnit, setSquareUnit] = useState('м')
    const [volume, setVolume] = useState(0)
    const [btn, setBtn] = useState(false)
    const resolve = () => {
       return UseVolumePrizma(length, lengthUnit, width, widthUnit, angle, square, squareUnit, setVolume) 
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
                <img className="image" src={PRIZMA}/>
                <div className="information">
                    <p className="text">В прямом парарллелепипеде стороны основания {length} {lengthUnit} и {width} {widthUnit}, угол между ними {angle}<sup>o</sup>.</p>
                    <p className="text">Найти объём параллелепипеда, если площадь боковой поверхности его {square} {squareUnit}<sup>2</sup>.</p>
                    <button className="button" onClick={() => btnResolve()}>Найти</button>
                </div>
            </div>
            <div className="block__resolve">
                <div>
                   <form className="input">
                        <UnitInput parameters={'Длина'} value={length} funcLen={setLengtUnit} func={setLength}/>
                        <UnitInput parameters={'Ширина'} value={width} funcLen={setWidthUnit} func={setWidth}/>
                        <AngleInput parameters={'Угол'} value={angle} func={setAngle}/>
                        <UnitInput parameters={'Площадь'} value={square} funcLen={setSquareUnit} func={setSquare}/>
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

export default PrizmaSecond;