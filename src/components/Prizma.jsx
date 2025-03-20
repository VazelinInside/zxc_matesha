import React, { useEffect, useState } from "react";
import UnitInput from "./UI/UnitInput";
import { UsePrizma } from "../hooks/usePrizma";
import prizma from "../photo/1типовая.png"
import Converter from "./UI/Сonverter";

const PRIZMA = prizma

const Prizma = (props) => {
    const [length, setLength] = useState(1)
    const [width, setWidth] = useState(1)
    const [diagonal, setDiagonal] = useState(1)
    const [lengthSqrt, setLengthSqrt] = useState(1)
    const [widthSqrt, setWidthSqrt] = useState(1)
    const [diagonalSqrt, setDiagonalSqrt] = useState(1)
    const [volume, setVolume] = useState(0)
    const [square, setSquare] = useState(0)
      
    useEffect(() => {
        return UsePrizma(length, width, diagonal, lengthSqrt, widthSqrt, diagonalSqrt, setVolume, setSquare) 
    }, [length, width, diagonal, lengthSqrt, widthSqrt, diagonalSqrt])

    return (
        <div className="block">
            <h1 className="title">Типовая задача по теме: "Призма" №1</h1>
            <div className="block__given">
                <div className="block__resolve">
                    <img className="image" src={PRIZMA} alt=""/>
                    <div className="resolve">
                        <h2 className="resolve__title">Решение</h2>
                        <p className="text">V = {volume} см<sup>3</sup></p>
                        <p className="text">Sполн = {square} см<sup>2</sup></p>
                    </div>
                </div>
                <div className="information">
                    <Converter/>
                    <p className="text">Длина и ширина прямоугольного параллелепипеда {length}√{lengthSqrt} см и {width}√{widthSqrt} см, 
                        диагональ {diagonal}√{diagonalSqrt} см.</p>
                    <p className="text">Найти объём и полную поверхность параллелепипеда.</p>
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
                        <UnitInput 
                            parameters={'Диагональ'} 
                            value={diagonal}
                            valueSqrt={diagonalSqrt}
                            funcSqrt={setDiagonalSqrt}
                            func={setDiagonal}/>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Prizma;