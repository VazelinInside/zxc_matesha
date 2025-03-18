import React, { useEffect, useState } from "react";
import UnitInput from "./UI/UnitInput";
import { UseCone } from "../hooks/useCone";
import cone from "../photo/10типовая.png"
import Converter from "./UI/Сonverter";

const CONE = cone

const Cone = (props) => {
    const [generatrix, setGeneratrix] = useState('')
    const [height, setHeight] = useState('')
    const [volume, setVolume] = useState(0)
    const [squareFull, setSquareFull] = useState(0)
    const [btn, setBtn] = useState(false)
    const resolve = () => {
       return UseCone(generatrix, height, setVolume, setSquareFull) 
    } 

    function btnResolve() {
        setBtn((btn) => !btn)
    }
      
    useEffect(() => {
        resolve()
    }, [btn])

    return (
        <div className="block">
            <h1 className="title">Типовая задача по теме: "Конус" №1</h1>
            <div className="block__given">
                <div className="block__resulve">
                    <img className="image" src={CONE}/>
                    <div className="resolve">
                        <h2 className="resolve__title">Решение</h2>
                        <p className="text">V = {volume} см<sup>3</sup></p>
                        <p className="text">Sполн = {squareFull} см<sup>2</sup></p>
                    </div>
                </div>
                <div className="information">
                    <Converter/>
                    <p className="text">Высота конуса {height} см, образующая {generatrix} см.</p>
                    <p className="text">Найти объем, площадь полной поверхности.</p>
                    <form className="input">
                        <UnitInput parameters={'Образующая'} value={generatrix} func={setGeneratrix}/>
                        <UnitInput parameters={'Высота'} value={height} func={setHeight}/>
                    </form>
                    <button className="button" onClick={() => btnResolve()}>Найти</button>
                </div>
            </div>
        </div>
    );
};

export default Cone;