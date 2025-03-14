import React, { useEffect, useState } from "react";
import UnitInput from "./UI/UnitInput";
import { UseTrunPiramidSecond } from "../hooks/useTrunPiramidSecond";
import pyramid from "../photo/5типовая.png"

const PYRAMID = pyramid

const TrunPiramidSecond = (props) => {
    const [lengthDown, setLengthDown] = useState('')
    const [lengthTop, setLengthTop] = useState('')
    const [apothem, setApothem] = useState('')
    const [lengthDownUnit, setLengtDownUnit] = useState('м')
    const [lengthTopUnit, setLengthTopUnit] = useState('м')
    const [apothemUnit, setApothemUnit] = useState('м')
    const [volume, setVolume] = useState(0)
    const [btn, setBtn] = useState(false)
    const resolve = () => {
       return UseTrunPiramidSecond(lengthDown, lengthDownUnit, lengthTop, lengthTopUnit, apothem, apothemUnit, setVolume) 
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
                <img className="image" src={PYRAMID}/>
                <div className="information">
                    <p className="text">В правильной трехугольной усеченной пирамиде апофема {apothem} {apothemUnit}, 
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
                        <UnitInput parameters={'Апофема'} value={apothem} funcLen={setApothemUnit} func={setApothem}/>
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

export default TrunPiramidSecond;