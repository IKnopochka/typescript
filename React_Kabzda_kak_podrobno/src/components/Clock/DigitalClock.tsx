import React, {useEffect, useState} from "react";

type ClockPropsType = {

}

const setTwoDigitsTime = (time: number) => time < 10 ? '0' + time : time;

export const DigitalClock: React.FC<ClockPropsType> = (props) => {

    const [date, setDate] = useState(new Date())

    useEffect(() => {

        const intId = setInterval(() => {
            console.log('Tick')
            setDate(new Date())
        }, 1000)

        return () => { clearInterval(intId)}

    }, [])



    return <>
        <span>{setTwoDigitsTime(date.getHours())}</span>
        :
        <span>{setTwoDigitsTime(date.getMinutes())}</span>
        :
        <span>{setTwoDigitsTime(date.getSeconds())}</span>
    </>
}