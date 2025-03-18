import React, { useEffect, useState } from "react";
import UnitInput from "./UI/UnitInput";
import { UseTrunPiramid } from "../hooks/useTrunPiramid";
import pyramid from "../photo/6типовая.png"
import Converter from "./UI/Сonverter";

const PYRAMID = pyramid

const TrunPiramid = (props) => {
    const [lengthDown, setLengthDown] = useState(1)
    const [lengthTop, setLengthTop] = useState(1)
    const [height, setHeight] = useState(1)
    const [lengthDownSqrt, setLengthDownSqrt] = useState(1)
    const [lengthTopSqrt, setLengthTopSqrt] = useState(1)
    const [heightSqrt, setHeightSqrt] = useState(1)
    const [sideRib, setSideRib] = useState(0)
    const [squareSide, setSquareSide] = useState(0)
    const [squareFull, setSquareFull] = useState(0)
    const [volume, setVolume] = useState(0)
    const [btn, setBtn] = useState(false)
    const resolve = () => {
       return UseTrunPiramid(lengthDown, lengthTop, height, lengthDownSqrt, lengthTopSqrt, heightSqrt, setSideRib, setSquareSide, setSquareFull, setVolume) 
    } 

    function btnResolve() {
        setBtn((btn) => !btn)
    }
      
    useEffect(() => {
        resolve()
    }, [btn])

    return (
        <div className="block">
            <h1 className="title">Типовая задача по теме: "Усеченная пирамида" №1</h1>
            <div className="block__given">
                <div className="block__resolve">
                    <img className="image" src={PYRAMID}/>
                    <div className="resolve">
                        <h2 className="resolve__title">Решение</h2>
                        <p className="text">Боковое ребро = {sideRib} см</p>
                        <p className="text">Sбок = {squareSide} см<sup>2</sup></p>
                        <p className="text">Sполн = {squareFull} см<sup>2</sup></p>
                        <p className="text">V = {volume} см<sup>3</sup></p>
                    </div>
                </div>
                <div className="information">
                    <Converter/>
                    <p className="text">В правильной четырехугольной усеченной пирамиде высота {height}√{heightSqrt} см, 
                    стороны нижнего основания {lengthDown}√{lengthDownSqrt} см, стороны верхнего основания {lengthTop}√{lengthTopSqrt} см.</p>
                    <p className="text">Найти боковое ребро, площадь боковой и полной поверхности и объем.</p>
                    <form className="input">
                        <UnitInput 
                            parameters={'Сторона нижнего основания'} 
                            value={lengthDown}
                            valueSqrt={lengthDownSqrt}
                            func={setLengthDown}
                            funcSqrt={setLengthDownSqrt}/>
                        <UnitInput 
                            parameters={'Сторона верхнего основания'} 
                            value={lengthTop}
                            valueSqrt={lengthTopSqrt}
                            func={setLengthTop}
                            funcSqrt={setLengthTopSqrt}/>
                        <UnitInput 
                            parameters={'Высота'} 
                            value={height}
                            valueSqrt={heightSqrt}
                            func={setHeight}
                            funcSqrt={setHeightSqrt}/>
                    </form>
                    <button className="button" onClick={() => btnResolve()}>Найти</button>
                </div>
            </div>
        </div>
    );
};

export default TrunPiramid;