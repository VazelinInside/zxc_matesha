import React from "react";

const UnitInput = (props) => {

    return (
        <div className="elem">
            <label className="text">{props.parameters} </label>
            <div className="input__elem">
                <input className="text__input" type="text" value={props.value} onChange={event => props.func(event.target.value)} placeholder="0"/>
            </div>
        </div>
    );
};

export default UnitInput;