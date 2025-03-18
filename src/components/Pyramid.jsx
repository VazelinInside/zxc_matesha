import React, { useEffect, useState } from "react";
import UnitInput from "./UI/UnitInput";
import { UsePyramid } from "../hooks/usePyramid";
import pyramid from "../photo/3типовая.png"
import Converter from "./UI/Сonverter";

const PYRAMID = pyramid

const Pyramid = (props) => {
    const [length, setLength] = useState('')
    const [height, setheight] = useState('')
    const [side, setSide] = useState(0)
    const [volume, setVolume] = useState(0)
    const [squareFull, setSquareFull] = useState(0)
    const [squareSide, setSquareSide] = useState(0)
    const [btn, setBtn] = useState(false)
    const resolve = () => {
       return UsePyramid(length, height, setVolume, setSquareFull, setSquareSide, setSide) 
    } 

    function btnResolve() {
        setBtn((btn) => !btn)
    }
      
    useEffect(() => {
        resolve()
    }, [btn])

    return (
        <div className="block">
            <h1 className="title">Типовая задача по теме: "Пирамида" №1</h1>
            <div className="block__given">
                <div className="block__resolve">
                <img className="image" src={PYRAMID}/>
                    <div className="resolve">
                        <h2 className="resolve__title">Решение</h2>
                        <p className="text">V = {volume}см<sup>3</sup></p>
                        <p className="text">Sполн = {squareFull} см<sup>2</sup></p>
                        <p className="text">Sбок = {squareSide} см<sup>2</sup></p>
                        <p className="text">Боковое ребро = {side} см</p>
                    </div>
                </div>
                <div className="information">
                    <Converter/>
                    <p className="text">В правильной четырехугольной пирамиде высота {height} см, стороны основания {length} см.</p>
                    <p className="text">Найти боковое ребро, площадь боковой и полной поверхности и объем.</p>
                    <form className="input">
                        <UnitInput parameters={'Сторона основания'} value={length} func={setLength}/>
                        <UnitInput parameters={'Высота'} value={height} func={setheight}/>
                    </form>
                    <button className="button" onClick={() => btnResolve()}>Найти</button>
                </div>
            </div>
        </div>
    );
};

export default Pyramid;