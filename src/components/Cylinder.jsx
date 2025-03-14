import React, { useEffect, useState } from "react";
import UnitInput from "./UI/UnitInput";
import { UseCylinder } from "../hooks/useCylinder";
import cylinder from "../photo/7типовая.png"

const CYLINDER = cylinder

const Cylinder = (props) => {
    const [diagonal, setDiagonal] = useState('')
    const [diametr, setDiametr] = useState('')
    const [diagonalUnit, setDiagonalUnit] = useState('м')
    const [diametrUnit, setDiametrUnit] = useState('м')
    const [volume, setVolume] = useState(0)
    const [square, setSquare] = useState(0)
    const [btn, setBtn] = useState(false)
    const resolve = () => {
       return UseCylinder(diagonal, diagonalUnit, diametr, diametrUnit, setVolume, setSquare) 
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
                <img className="image" src={CYLINDER}/>
                <div className="information">
                    <p className="text">Диагональ осевого сечения цилиндра {diagonal} {diagonalUnit}, диаметр основания {diametr} {diametrUnit}.</p>
                    <p className="text">Найти объём и полную поверхность цилиндра.</p>
                    <button className="button" onClick={() => btnResolve()}>Найти</button>
                </div>
            </div>
            <div className="block__resolve">
                <div>
                   <form className="input">
                        <UnitInput parameters={'Диагональ'} value={diagonal} funcLen={setDiagonalUnit} func={setDiagonal}/>
                        <UnitInput parameters={'Диаметр'} value={diametr} funcLen={setDiametrUnit} func={setDiametr}/>
                   </form>
                </div>
                <div className="resolve">
                    <h2 className="resolve__title">Решение</h2>
                    <p className="text">V = {volume} см<sup>3</sup></p>
                    <p className="text">Sполн = {square} см<sup>2</sup></p>
                </div>
            </div>
        </div>
    );
};

export default Cylinder;