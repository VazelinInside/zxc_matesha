import React, { useEffect, useState } from "react";
import { UsePrizmaSecond } from "../hooks/usePrizmaSecond";
import AngleInput from "./UI/AngleInput";
import UnitInput from "./UI/UnitInput";
import prizma from "../photo/2типовая.png"
import Converter from "./UI/Сonverter";

const PRIZMA = prizma

const PrizmaSecond = (props) => {
    const [length, setLength] = useState(1)
    const [width, setWidth] = useState(1)
    const [square, setSquare] = useState(1)
    const [lengthSqrt, setLengthSqrt] = useState(1)
    const [widthSqrt, setWidthSqrt] = useState(1)
    const [squareSqrt, setSquareSqrt] = useState(1)
    const [angle, setAngle] = useState(1)
    const [volume, setVolume] = useState(0)
      
    useEffect(() => {
        return UsePrizmaSecond(length, width, angle, square, lengthSqrt, widthSqrt, squareSqrt, setVolume) 
    }, [length, width, angle, square, lengthSqrt, widthSqrt, squareSqrt])

    return (
        <div className="block">
            <h1 className="title">Типовая задача по теме: "Призма" №2</h1>
            <div className="block__given">
                <div className="block__resolve">
                    <img className="image" src={PRIZMA} alt=""/>
                    <div className="resolve">
                        <h2 className="resolve__title">Решение</h2>
                        <p className="text">V = {volume} см<sup>3</sup></p>
                    </div>
                </div>
                <div className="information">
                    <Converter/>
                    <p className="text">В прямом парарллелепипеде стороны основания {length}√{lengthSqrt} см и {width}√{widthSqrt} см, 
                        угол между ними {angle}<sup>o</sup>.</p>
                    <p className="text">Найти объём параллелепипеда, 
                        если площадь боковой поверхности его {square}√{squareSqrt} см<sup>2</sup>.</p>
                    <form className="input">
                        <UnitInput 
                            parameters={'Длина'} 
                            value={length}
                            valueSqrt={lengthSqrt}
                            funcSqrt={setLengthSqrt}
                            func={setLength}/>
                        <UnitInput 
                            parameters={'Ширина'} 
                            value={width}
                            valueSqrt={widthSqrt}
                            funcSqrt={setWidthSqrt}
                            func={setWidth}/>
                        <AngleInput 
                            parameters={'Угол'} 
                            value={angle}
                            func={setAngle}/>
                        <UnitInput 
                            parameters={'Площадь'} 
                            value={square}
                            valueSqrt={squareSqrt}
                            funcSqrt={setSquareSqrt} 
                            func={setSquare}/>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default PrizmaSecond;