import React, { useEffect, useState } from "react";
import UnitInput from "./UI/UnitInput";
import { UseCone } from "../hooks/useCone";
import cone from "../photo/8типовая.png"

const CONE = cone

const Cone = (props) => {
    const [generatrix, setGeneratrix] = useState('')
    const [height, setHeight] = useState('')
    const [generatrixUnit, setGeneratrixUnit] = useState('м')
    const [heightUnit, setHeightUnit] = useState('м')
    const [volume, setVolume] = useState(0)
    const [squareFull, setSquareFull] = useState(0)
    const [btn, setBtn] = useState(false)
    const resolve = () => {
       return UseCone(generatrix, generatrixUnit, height, heightUnit, setVolume, setSquareFull) 
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
                <img className="image" src={CONE}/>
                <div className="information">
                    <p className="text">Высота конуса {height} {heightUnit}, образующая {generatrix} {generatrixUnit}.</p>
                    <p className="text">Найти объем, площадь полной поверхности.</p>
                    <button className="button" onClick={() => btnResolve()}>Найти</button>
                </div>
            </div>
            <div className="block__resolve">
                <div>
                   <form className="input">
                        <UnitInput parameters={'Образующая'} value={generatrix} funcLen={setGeneratrixUnit} func={setGeneratrix}/>
                        <UnitInput parameters={'Высота'} value={height} funcLen={setHeightUnit} func={setHeight}/>
                   </form>
                </div>
                <div className="resolve">
                    <h2 className="resolve__title">Решение</h2>
                    <p className="text">V = {volume} см<sup>3</sup></p>
                    <p className="text">Sполн = {squareFull} см<sup>2</sup></p>
                </div>
            </div>
        </div>
    );
};

export default Cone;