import React, { useEffect, useState } from "react";
import { UseUnit } from "../../hooks/useUnit";
import ConverterInput from "./ConverterInput";

const Converter = (props) => {
    const [number, setNumber] = useState('')
    const [unit, setUnit] = useState('м')
    const [resultNumber, setResultNumber] = useState(0)
    const [btn, setBtn] = useState(false)
    
        function btnResolve() {
            setBtn((btn) => !btn)
        }
          
        useEffect(() => {
            return UseUnit(number, unit, setResultNumber) 
        }, [btn, number, unit])

    return (
        <div className="converter">
            <form className="elem elem_conv">
                <ConverterInput 
                    parameters={'Конвертировать в см:'} 
                    value={number} 
                    funcLen={setUnit} 
                    func={setNumber}/>
            </form>
            <button className="button" onClick={() => btnResolve()}>Конвертировать: {resultNumber} см</button>
        </div>
    );
};

export default Converter;