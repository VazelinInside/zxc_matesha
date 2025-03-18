import React, { useEffect, useState } from "react";
import UnitInput from "./UI/UnitInput";
import { UseVolumeAndSquare } from "../hooks/usePrizma";
import prizma from "../photo/1типовая.png"
import Converter from "./UI/Сonverter";

const PRIZMA = prizma

const Prizma = (props) => {
    const [length, setLength] = useState('')
    const [width, setWidth] = useState('')
    const [diagonal, setDiagonal] = useState('')
    const [volume, setVolume] = useState(0)
    const [square, setSquare] = useState(0)
    const [btn, setBtn] = useState(false)
    const resolve = () => {
       return UseVolumeAndSquare(length, width, diagonal, setVolume, setSquare) 
    } 

    function btnResolve() {
        setBtn((btn) => !btn)
    }
      
    useEffect(() => {
        resolve()
    }, [btn])

    return (
        <div className="block">
            <h1 className="title">Типовая задача по теме: "Призма" №1</h1>
            <div className="block__given">
                <div className="block__resolve">
                    <img className="image" src={PRIZMA}/>
                    <div className="resolve">
                        <h2 className="resolve__title">Решение</h2>
                        <p className="text">V = {volume} см<sup>3</sup></p>
                        <p className="text">Sполн = {square} см<sup>2</sup></p>
                    </div>
                </div>
                <div className="information">
                    <Converter/>
                    <p className="text">Длина и ширина прямоугольного параллелепипеда {length} см и {width} см, диагональ {diagonal} см.</p>
                    <p className="text">Найти объём и полную поверхность параллелепипеда.</p>
                    <form className="input">
                        <UnitInput parameters={'Длина'} value={length} func={setLength}/>
                        <UnitInput parameters={'Ширина'} value={width} func={setWidth}/>
                        <UnitInput parameters={'Диагональ'} value={diagonal} func={setDiagonal}/>
                    </form>
                    <button className="button" onClick={() => btnResolve()}>Найти</button>
                </div>
            </div>
        </div>
    );
};

export default Prizma;