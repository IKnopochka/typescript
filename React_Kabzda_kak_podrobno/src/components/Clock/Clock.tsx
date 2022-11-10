import React, {useEffect, useState} from "react";
import './style.css'

type ClockPropsType = {
    mode: 'digital' | 'analog'
}

const setTwoDigitsTime = (time: number) => time < 10 ? '0' + time : time;

export const Clock: React.FC<ClockPropsType> = (props) => {

    const [date, setDate] = useState(new Date())

    useEffect(() => {

        const intId = setInterval(() => {
            console.log('Tick')
            setDate(new Date())
        }, 1000)

        return () => {
            clearInterval(intId)
        }

    }, [])

    let view;
    switch (props.mode) {
        case "analog":
            view = <AnalogClockView date={date}/>
            break
        case "digital":
        default:
            view = <DigitalClockView date={date}/>
    }

    return <div>{view}</div>
}


type ClockViewPropsType = {
    date: Date
}
export const DigitalClockView = (props: ClockViewPropsType) => {
    return <>
        <span>{setTwoDigitsTime(props.date.getHours())}</span>
        :
        <span>{setTwoDigitsTime(props.date.getMinutes())}</span>
        :
        <span>{setTwoDigitsTime(props.date.getSeconds())}</span>
    </>
}
export const AnalogClockView: React.FC<ClockViewPropsType> = ({date}) => {

    const secondsStyle = {
        transform: `rotate(${date.getSeconds() * 6}deg)`
    };
    const minutesStyle = {
        transform: `rotate(${date.getMinutes() * 6}deg)`
    };
    const hoursStyle = {
        transform: `rotate(${date.getHours() * 30}deg)`
    };

    return <div className={"clock"}>
        <div className={"analog-clock"}>
            <div className={"dial seconds"} style={secondsStyle} />
            <div className={"dial minutes"} style={minutesStyle} />
            <div className={"dial hours"} style={hoursStyle} />
        </div>
    </div>
}