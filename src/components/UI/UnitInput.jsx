import React from "react";

const UnitInput = (props) => {

    return (
        <div className="elem">
            <div>
                <label className="text">{props.parameters} </label>
            </div>
            <div className="input__value">
                <div className="input__elem">
                    <input 
                        className="text__input" 
                        type="text" 
                        value={props.value} 
                        onChange={event => props.func(event.target.value)} 
                        placeholder="0"/>
                </div>
                <label className="text">√ </label>
                <div className="input__elem">
                    <input 
                        className="text__input" 
                        type="text" 
                        value={props.valueSqrt} 
                        onChange={event => props.funcSqrt(event.target.value)} 
                        placeholder="0"/>
                </div>
            </div>
        </div>
    );
};

export default UnitInput;