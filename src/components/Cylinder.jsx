import React, { useEffect, useState } from "react";
import UnitInput from "./UI/UnitInput";
import { UseCylinder } from "../hooks/useCylinder";
import cylinder from "../photo/8типовая.png"
import Converter from "./UI/Сonverter";

const CYLINDER = cylinder

const Cylinder = (props) => {
    const [diagonal, setDiagonal] = useState('')
    const [diametr, setDiametr] = useState('')
    const [volume, setVolume] = useState(0)
    const [square, setSquare] = useState(0)
    const [btn, setBtn] = useState(false)
    const resolve = () => {
       return UseCylinder(diagonal, diametr, setVolume, setSquare) 
    } 

    function btnResolve() {
        setBtn((btn) => !btn)
    }
      
    useEffect(() => {
        resolve()
    }, [btn])

    return (
        <div className="block">
            <h1 className="title">Типовая задача по теме: "Цилиндр" №1</h1>
            <div className="block__given">
                <div className="block__resolve">
                    <img className="image" src={CYLINDER}/>
                    <div className="resolve">
                        <h2 className="resolve__title">Решение</h2>
                        <p className="text">V = {volume} см<sup>3</sup></p>
                        <p className="text">Sполн = {square} см<sup>2</sup></p>
                    </div>
                </div>
                <div className="information">
                    <Converter/>
                    <p className="text">Диагональ осевого сечения цилиндра {diagonal} см, диаметр основания {diametr} см.</p>
                    <p className="text">Найти объём и полную поверхность цилиндра.</p>
                    <form className="input">
                        <UnitInput parameters={'Диагональ'} value={diagonal} func={setDiagonal}/>
                        <UnitInput parameters={'Диаметр'} value={diametr} func={setDiametr}/>
                    </form>
                    <button className="button" onClick={() => btnResolve()}>Найти</button>
                </div>
            </div>
        </div>
    );
};

export default Cylinder;