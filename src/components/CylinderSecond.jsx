import React, { useEffect, useState } from "react";
import UnitInput from "./UI/UnitInput";
import AngleInput from "./UI/AngleInput";
import { UseCylinderSecond } from "../hooks/useCylinderSecond";
import cylinder from "../photo/9типовая.png"
import Converter from "./UI/Сonverter";

const CYLINDER = cylinder

const CylinderSecond = (props) => {
    const [diagonal, setDiagonal] = useState(1)
    const [diagonalSqrt, setDiagonalSqrt] = useState(1)
    const [angle, setAngle] = useState(1)
    const [squareCut, setSquareCut] = useState(0)
    const [volume, setVolume] = useState(0)
    const [squareSide, setSquareSide] = useState(0)
      
    useEffect(() => {
        return UseCylinderSecond(diagonal, diagonalSqrt, angle, setSquareCut, setVolume, setSquareSide)
    }, [diagonal, diagonalSqrt, angle])

    return (
        <div className="block">
            <h1 className="title">Типовая задача по теме: "Цилиндр" №2</h1>
            <div className="block__given">
                <div className="block__resolve">
                    <img className="image" src={CYLINDER} alt=""/>
                    <div className="resolve">
                        <h2 className="resolve__title">Решение</h2>
                        <p className="text">V = {volume} см<sup>3</sup></p>
                        <p className="text">Sбок = {squareSide} см<sup>2</sup></p>
                        <p className="text">Sос. сеч. = {squareCut} см<sup>2</sup></p>
                    </div>
                </div>
                <div className="information">
                    <Converter/>
                    <p className="text">Диагональ осевого сечения цилиндра {diagonal}√{diagonalSqrt} см и составляет с основанием угол {angle}<sup>o</sup>.</p>
                    <p className="text">Найти площадь осевого сечения, объём и боковую поверхность цилиндра.</p>
                    <form className="input">
                        <UnitInput 
                            parameters={'Диагональ'} 
                            value={diagonal}
                            valueSqrt={diagonalSqrt}
                            func={setDiagonal}
                            funcSqrt={setDiagonalSqrt}/>
                        <AngleInput  
                            parameters={'Угол'} 
                            value={angle} 
                            func={setAngle}/>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default CylinderSecond;