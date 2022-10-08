import {useEffect, useState} from "react";
import React from "react";

export default {
    title: 'UseEffect'
}

export const SimpleExample = () => {
    console.log('Example')

    const [counter, setCounter] = useState(0)
    const [fake, setFake] = useState(0)

    useEffect(() => {
        console.log('UseEffect renders every time')

    })
    useEffect(() => {
        console.log('UseEffect renders once')


    }, [])
    useEffect(() => {
        console.log('UseEffect renders when counter changes')


    }, [counter])

    return <>
        Hello, {counter}
        <button onClick={() => setCounter(counter + 1)}>Add Count</button>
    </>
}