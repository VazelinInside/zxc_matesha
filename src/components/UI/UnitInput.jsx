import React from "react";

const UnitInput = (props) => {

    return (
        <div className="elem">
            <label className="text">{props.parameters} </label>
            <div className="input__elem">
                <input className="text__input" type="text" value={props.value} onChange={event => props.func(event.target.value)}/>
                <select className="text__select" name="" id="" onChange={event => props.funcLen(event.target.value)}>
                    <option className="text" value="м">м</option>
                    <option className="text" value="дм">дм</option>
                    <option className="text" value="см">см</option>
                    <option className="text" value="мм">мм</option>
                </select> 
            </div>
        </div>
    );
};

export default UnitInput;