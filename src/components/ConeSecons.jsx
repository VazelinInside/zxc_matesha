import React, { useEffect, useState } from "react";
import UnitInput from "./UI/UnitInput";
import { UseConeSecond } from "../hooks/useConeSecond";
import AngleInput from "./UI/AngleInput";
import cone from "../photo/9типовая.png"

const CONE = cone

const ConeSecond = (props) => {
    const [generatrix, setGeneratrix] = useState('')
    const [angle, setAngle] = useState('')
    const [generatrixUnit, setGeneratrixUnit] = useState('м')
    const [squareSide, setSquareSide] = useState(0)
    const [btn, setBtn] = useState(false)
    const resolve = () => {
       return UseConeSecond(generatrix, generatrixUnit, angle, setSquareSide) 
    } 

    function btnResolve() {
        setBtn((btn) => !btn)
    }
      
    useEffect(() => {
        resolve()
    }, [btn])

    return (
        <div className="block">
            <h1 className="title">Типовая задача по теме: "Конус" №2</h1>
            <div className="block__given">
                <img className="image" src={CONE}/>
                <div className="information">
                    <p className="text">Образующая конуса равна {generatrix} {generatrixUnit}, угол при вершине осевого сечения {angle}<sup>o</sup>.</p>
                    <p className="text">Найти площадь полной поверхности.</p>
                    <button className="button" onClick={() => btnResolve()}>Найти</button>
                </div>
            </div>
            <div className="block__resolve">
                <div>
                   <form className="input">
                        <UnitInput parameters={'Образующая'} value={generatrix} funcLen={setGeneratrixUnit} func={setGeneratrix}/>
                        <AngleInput parameters={'Угол'} value={angle} func={setAngle}/>
                   </form>
                </div>
                <div className="resolve">
                    <h2 className="resolve__title">Решение</h2>
                    <p className="text">Sбок = {squareSide} см<sup>2</sup></p>
                </div>
            </div>
        </div>
    );
};

export default ConeSecond;