import React, { useEffect, useState } from "react";
import UnitInput from "./UI/UnitInput";
import { UseCylinder } from "../hooks/useCylinder";
import cylinder from "../photo/8типовая.png"
import Converter from "./UI/Сonverter";

const CYLINDER = cylinder

const Cylinder = (props) => {
    const [diagonal, setDiagonal] = useState(1)
    const [diametr, setDiametr] = useState(1)
    const [diagonalSqrt, setDiagonalSqrt] = useState(1)
    const [diametrSqrt, setDiametrSqrt] = useState(1)
    const [volume, setVolume] = useState(0)
    const [square, setSquare] = useState(0)
    const [btn, setBtn] = useState(false)

    function btnResolve() {
        setBtn((btn) => !btn)
    }
      
    useEffect(() => {
        return UseCylinder(diagonal, diametr, diagonalSqrt, diametrSqrt, setVolume, setSquare) 
    }, [btn, diagonal, diametr, diagonalSqrt, diametrSqrt])

    return (
        <div className="block">
            <h1 className="title">Типовая задача по теме: "Цилиндр" №1</h1>
            <div className="block__given">
                <div className="block__resolve">
                    <img className="image" src={CYLINDER} alt=""/>
                    <div className="resolve">
                        <h2 className="resolve__title">Решение</h2>
                        <p className="text">V = {volume} см<sup>3</sup></p>
                        <p className="text">Sполн = {square} см<sup>2</sup></p>
                    </div>
                </div>
                <div className="information">
                    <Converter/>
                    <p className="text">Диагональ осевого сечения цилиндра {diagonal}√{diagonalSqrt} см, 
                        диаметр основания {diametr}√{diametrSqrt} см.</p>
                    <p className="text">Найти объём и полную поверхность цилиндра.</p>
                    <form className="input">
                        <UnitInput 
                            parameters={'Диагональ'} 
                            value={diagonal}
                            valueSqrt={diagonalSqrt}
                            func={setDiagonal}
                            funcSqrt={setDiagonalSqrt}/>
                        <UnitInput 
                            parameters={'Диаметр'} 
                            value={diametr}
                            valueSqrt={diametrSqrt}
                            func={setDiametr}
                            funcSqrt={setDiametrSqrt}/>
                    </form>
                    <button className="button" onClick={() => btnResolve()}>Найти</button>
                </div>
            </div>
        </div>
    );
};

export default Cylinder;