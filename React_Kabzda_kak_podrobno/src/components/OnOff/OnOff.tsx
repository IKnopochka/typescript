import React, {useState} from "react";

export type propsSwitch = boolean

export type propsOnOff = {
    value: propsSwitch
    onClick: (value: propsSwitch) => void
}

export const OnOff = (props: propsOnOff) => {

    const OnStyle = {
        width: "30px",
        height: "17px",
        border: "1px solid black",
        borderRadius: "2px",
        display: "inline-block",
        backgroundColor: props.value ? "green" : "white"
    }
    const OffStyle = {
        width: "30px",
        height: "17px",
        border: "1px solid black",
        borderRadius: "2px",
        display: "inline-block",
        backgroundColor: props.value ? "white" : "red"
    }
    const IndicatorStyle = {
        width: "15px",
        height: "15px",
        border: "1px solid black",
        borderRadius: "7px",
        display: "inline-block",
        marginLeft: "5px",
        backgroundColor: props.value ? "green" : "red"
    }

    const onClicked = () => {
        props.onClick(true)
    }
    const offClicked = () => () => {
        props.onClick(false)
    }

    return (
        <div>
            <div style={OnStyle} onClick={onClicked}>On
            </div>
            <div style={OffStyle} onClick={offClicked}>Off
            </div>
            <div style={IndicatorStyle}></div>
        </div>
    )
}