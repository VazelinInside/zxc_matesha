import React, { useEffect, useState } from "react";
import UnitInput from "./UI/UnitInput";
import { UsePyramidThird } from "../hooks/usePyramidThird";
import pyramid from "../photo/5типовая.png"
import Converter from "./UI/Сonverter";

const PYRAMID = pyramid

const PyramidThird = (props) => {
    const [height, setHeight] = useState('')
    const [apothem, setApothem] = useState('')
    const [squareFull, setSquareFull] = useState(0)
    const [btn, setBtn] = useState(false)
    const resolve = () => {
       return UsePyramidThird(height, apothem, setSquareFull) 
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
                <div className="block__resolve">
                    <img className="image" src={PYRAMID}/>
                    <div className="resolve">
                        <h2 className="resolve__title">Решение</h2>
                        <p className="text">Sполн = {squareFull} см<sup>2</sup></p>
                    </div>
                </div>
                <div className="information">
                    <Converter/>
                    <p className="text">В правильной трехугольной пирамиде высота {height} см, апофема {apothem} см.</p>
                    <p className="text">Найти площадь полной поверхности.</p>
                    <form className="input">
                        <UnitInput parameters={'Высота'} value={height} func={setHeight}/>
                        <UnitInput parameters={'Апофема'} value={apothem} func={setApothem}/>
                    </form>
                    <button className="button" onClick={() => btnResolve()}>Найти</button>
                </div>
            </div>
        </div>
    );
};

export default PyramidThird;