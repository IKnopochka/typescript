import React, {useState} from "react";

export const UncontrolledOnOff = () => {

    let [on, setOn] = useState(false)

    const OnStyle = {
        width: "30px",
        height: "17px",
        border: "1px solid black",
        borderRadius: "2px",
        display: "inline-block",
        backgroundColor: on ? "green" : "white"
    }
    const OffStyle = {
        width: "30px",
        height: "17px",
        border: "1px solid black",
        borderRadius: "2px",
        display: "inline-block",
        backgroundColor: on ? "white" : "red"
    }
    const IndicatorStyle = {
        width: "15px",
        height: "15px",
        border: "1px solid black",
        borderRadius: "7px",
        display: "inline-block",
        marginLeft: "5px",
        backgroundColor: on ? "green" : "red"
    }

    return (<div>
        <div style={OnStyle} onClick={() => {setOn(true)}}>On</div>
        <div style={OffStyle} onClick={() => {setOn(false)}}>Off</div>
        <div style={IndicatorStyle}></div>
        </div>
    )
}