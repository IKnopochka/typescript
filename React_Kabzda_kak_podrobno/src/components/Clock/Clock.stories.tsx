import React, {useEffect, useState} from "react";
import {DigitalClock} from "./DigitalClock";
import './style.css';

export default {
    title: 'Clock'
}

export const DigitalClockExample = () => <DigitalClock/>

export const AnalogClockExample = () => {

        const [rotateDeg, setRotateDeg] = useState(0);

        useEffect(() => {
                const interval = setInterval(() => {
                    debugger
                    setRotateDeg((rotateDeg) => rotateDeg + 6);
                    console.log(rotateDeg)
                }, 1000);
            return () => {clearInterval(interval)}
        }, []);

        return (
            <div>
                <div className="container">
                    <div
                        style={{ transform: `rotate(${rotateDeg}deg)` }}
                        className="stick"
                    >

                    </div>
                </div>
            </div>
        );

}
