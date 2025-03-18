import React, { useEffect, useState } from "react";
import UnitInput from "./UI/UnitInput";
import { UseTrunPiramidSecond } from "../hooks/useTrunPiramidSecond";
import pyramid from "../photo/7типовая.png"
import Converter from "./UI/Сonverter";

const PYRAMID = pyramid

const TrunPiramidSecond = (props) => {
    const [lengthDown, setLengthDown] = useState('')
    const [lengthTop, setLengthTop] = useState('')
    const [apothem, setApothem] = useState('')
    const [sideRib, setSideRibl] = useState(0)
    const [squareSide, setSquareSide] = useState(0)
    const [squareFull, setSquareFull] = useState(0)
    const [volume, setVolume] = useState(0)
    const [btn, setBtn] = useState(false)
    const resolve = () => {
       return UseTrunPiramidSecond(lengthDown, lengthTop, apothem, setSideRibl, setSquareSide, setSquareFull, setVolume) 
    } 

    function btnResolve() {
        setBtn((btn) => !btn)
    }
      
    useEffect(() => {
        resolve()
    }, [btn])

    return (
        <div className="block">
            <h1 className="title">Типовая задача по теме: "Усеченная пирамида" №2</h1>
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
                    <p className="text">В правильной трехугольной усеченной пирамиде апофема {apothem} см, 
                    стороны нижнего основания {lengthDown} см, стороны верхнего основания {lengthTop} см.</p>
                    <p className="text">Найти боковое ребро, площадь боковой и полной поверхности и объем.</p>
                    <form className="input">
                        <UnitInput parameters={'Сторона нижнего основания'} value={lengthDown} func={setLengthDown}/>
                        <UnitInput parameters={'Сторона верхнего основания'} value={lengthTop} func={setLengthTop}/>
                        <UnitInput parameters={'Апофема'} value={apothem} func={setApothem}/>
                   </form>
                    <button className="button" onClick={() => btnResolve()}>Найти</button>
                </div>
            </div>
        </div>
    );
};

export default TrunPiramidSecond;