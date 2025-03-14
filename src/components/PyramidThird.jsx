import React, { useEffect, useState } from "react";
import UnitInput from "./UI/UnitInput";
import { UsePyramidThird } from "../hooks/usePyramidThird";
import pyramid from "../photo/13типовая.png"

const PYRAMID = pyramid

const PyramidThird = (props) => {
    const [height, setHeight] = useState('')
    const [heightUnit, setHeightUnit] = useState('м')
    const [apothem, setApothem] = useState('')
    const [apothemUnit, setApothemUnit] = useState('м')
    const [squareFull, setSquareFull] = useState(0)
    const [btn, setBtn] = useState(false)
    const resolve = () => {
       return UsePyramidThird(height, heightUnit, apothem, apothemUnit, setSquareFull) 
    } 

    function btnResolve() {
        setBtn((btn) => !btn)
    }
      
    useEffect(() => {
        resolve()
    }, [btn])

    return (
        <div className="block">
            <h1 className="title">Типовая задача по теме: "Пирамида" №3</h1>
            <div className="block__given">
                <img className="image" src={PYRAMID}/>
                <div className="information">
                    <p className="text">В правильной трехугольной пирамиде высота {height} {heightUnit}, апофема {apothem} {apothemUnit}.</p>
                    <p className="text">Найти площадь полной поверхности.</p>
                    <button className="button" onClick={() => btnResolve()}>Найти</button>
                </div>
            </div>
            <div className="block__resolve">
                <div>
                   <form className="input">
                        <UnitInput parameters={'Высота'} value={height} funcLen={setHeightUnit} func={setHeight}/>
                        <UnitInput parameters={'Апофема'} value={apothem} funcLen={setApothemUnit} func={setApothem}/>
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

export default PyramidThird;