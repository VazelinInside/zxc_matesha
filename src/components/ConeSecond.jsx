import React, { useEffect, useState } from "react";
import UnitInput from "./UI/UnitInput";
import { UseConeSecond } from "../hooks/useConeSecond";
import AngleInput from "./UI/AngleInput";
import cone from "../photo/11типовая.png"
import Converter from "./UI/Сonverter";

const CONE = cone

const ConeSecond = (props) => {
    const [generatrix, setGeneratrix] = useState(1)
    const [generatrixSqrt, setGeneratrixSqrt] = useState(1)
    const [angle, setAngle] = useState(1)
    const [squareFull, setSquareFull] = useState(0)

    useEffect(() => {
        return UseConeSecond(generatrix, generatrixSqrt, angle, setSquareFull) 
    }, [generatrix, generatrixSqrt, angle])

    return (
        <div className="block">
            <h1 className="title">Типовая задача по теме: "Конус" №2</h1>
            <div className="block__given">
                <div className="block__resolve">
                    <img className="image" src={CONE} alt=""/>
                    <div className="resolve">
                        <h2 className="resolve__title">Решение</h2>
                        <p className="text">Sполн = {squareFull} см<sup>2</sup></p>
                    </div>
                </div> 
                <div className="information">
                    <Converter/>
                    <p className="text">Образующая конуса равна {generatrix}√{generatrixSqrt} см, угол при вершине осевого сечения {angle}<sup>o</sup>.</p>
                    <p className="text">Найти площадь полной поверхности.</p>
                    <form className="input">
                        <UnitInput 
                            parameters={'Образующая'} 
                            value={generatrix}
                            valueSqrt={generatrixSqrt}
                            func={setGeneratrix}
                            funcSqrt={setGeneratrixSqrt}/>
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

export default ConeSecond;