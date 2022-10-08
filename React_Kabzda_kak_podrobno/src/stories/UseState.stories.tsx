import {useState} from "react";
import React from "react";

export default {
    title: 'UseState'
}

const NewMessagesCounter = (props: {count: number}) => {
    return <div>{props.count}</div>
}

export const Example1 = () => {
    console.log('Example1')
    const [counter, setCounter] = useState(0)

    return <>
        <button onClick={() => setCounter(counter + 1)}>Add Count</button>
        <NewMessagesCounter count={counter}/>
    </>
}