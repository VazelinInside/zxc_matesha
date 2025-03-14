import React, { useEffect, useState } from "react";
import UnitInput from "./UI/UnitInput";
import { UseTrunPiramid } from "../hooks/useTrunPiramid";
import pyramid from "../photo/4типовая.png"
import PyramidSecond from "./PyramidSecond";

const PYRAMID = pyramid

const TrunPiramid = (props) => {
    const [lengthDown, setLengthDown] = useState('')
    const [lengthTop, setLengthTop] = useState('')
    const [height, setHeight] = useState('')
    const [lengthDownUnit, setLengtDownUnit] = useState('м')
    const [lengthTopUnit, setLengthTopUnit] = useState('м')
    const [heightUnit, setHeightUnit] = useState('м')
    const [squareFull, setSquareFull] = useState(0)
    const [btn, setBtn] = useState(false)
    const resolve = () => {
       return UseTrunPiramid(lengthDown, lengthDownUnit, lengthTop, lengthTopUnit, height, heightUnit, setSquareFull) 
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
                <img className="image" src={PYRAMID}/>
                <div className="information">
                    <p className="text">В правильной четырехугольной усеченной пирамиде высота {height} {heightUnit}, 
                    стороны нижнего основания {lengthDown} {lengthDownUnit}, стороны верхнего основания{lengthTop} {lengthTopUnit}.</p>
                    <p className="text">Найти боковое ребро, площадь боковой и полной поверхности и объем.</p>
                    <button className="button" onClick={() => btnResolve()}>Найти</button>
                </div>
            </div>
            <div className="block__resolve">
                <div>
                   <form className="input">
                        <UnitInput parameters={'Сторона нижнего основания'} value={lengthDown} funcLen={setLengtDownUnit} func={setLengthDown}/>
                        <UnitInput parameters={'Сторона верхнего основания'} value={lengthTop} funcLen={setLengthTopUnit} func={setLengthTop}/>
                        <UnitInput parameters={'Высота'} value={height} funcLen={setHeightUnit} func={setHeight}/>
                   </form>
                </div>
                <div className="resolve">
                    <h2 className="resolve__title">Решение</h2>
                    <p className="text">Sполн = {squareFull} см<sup>2</sup></p>
                </div>
            </div>
        </div>
    );
};

export default TrunPiramid;