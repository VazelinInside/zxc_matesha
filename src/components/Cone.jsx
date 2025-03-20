import React, { useEffect, useState } from "react";
import UnitInput from "./UI/UnitInput";
import { UseCone } from "../hooks/useCone";
import cone from "../photo/10типовая.png"
import Converter from "./UI/Сonverter";

const CONE = cone

const Cone = (props) => {
    const [generatrix, setGeneratrix] = useState(1)
    const [height, setHeight] = useState(1)
    const [generatrixSqrt, setGeneratrixSqrt] = useState(1)
    const [heightSqrt, setHeightSqrt] = useState(1)
    const [volume, setVolume] = useState(0)
    const [squareFull, setSquareFull] = useState(0)
    const [btn, setBtn] = useState(false)

    function btnResolve() {
        setBtn((btn) => !btn)
    }
      
    useEffect(() => {
        return UseCone(generatrix, generatrixSqrt, height, heightSqrt, setVolume, setSquareFull) 
    }, [btn, generatrix, generatrixSqrt, height, heightSqrt])

    return (
        <div className="block">
            <h1 className="title">Типовая задача по теме: "Конус" №1</h1>
            <div className="block__given">
                <div className="block__resolve">
                    <img className="image" src={CONE} alt=""/>
                    <div className="resolve">
                        <h2 className="resolve__title">Решение</h2>
                        <p className="text">V = {volume} см<sup>3</sup></p>
                        <p className="text">Sполн = {squareFull} см<sup>2</sup></p>
                    </div>
                </div>
                <div className="information">
                    <Converter/>
                    <p className="text">Высота конуса {height}√{heightSqrt} см, образующая {generatrix}√{generatrixSqrt} см.</p>
                    <p className="text">Найти объем, площадь полной поверхности.</p>
                    <form className="input">
                        <UnitInput 
                            parameters={'Образующая'} 
                            value={generatrix}
                            valueSqrt={generatrixSqrt}
                            func={setGeneratrix}
                            funcSqrt={setGeneratrixSqrt}/>
                        <UnitInput 
                            parameters={'Высота'} 
                            value={height}
                            valueSqrt={heightSqrt}
                            func={setHeight}
                            funcSqrt={setHeightSqrt}/>
                    </form>
                    <button className="button" onClick={() => btnResolve()}>Найти</button>
                </div>
            </div>
        </div>
    );
};

export default Cone;