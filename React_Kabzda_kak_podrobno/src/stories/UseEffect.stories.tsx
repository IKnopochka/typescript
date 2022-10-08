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
        document.title = String((counter))
    })

    useEffect(() => {
        console.log('UseEffect renders once')
        document.title = String((counter))
    }, [])

    useEffect(() => {
        console.log('UseEffect renders when counter changes')
        document.title = String((counter))
    }, [counter])

    return <>
        Hello, {counter}
        <button onClick={() => setCounter(counter + 1)}>Add Count</button>
    </>
}

export const SetTimeoutExample = () => {
    console.log('setTimeout Example')

    const [counter, setCounter] = useState(0)
    const [fake, setFake] = useState(0)

    useEffect(() => {

        setTimeout(() => {
            console.log('SetTimeout')
            document.title = String((counter))
        }, 2000)


    }, [counter])

    return <>
        Hello, {counter}
        <button onClick={() => setCounter(counter + 1)}>Count+</button>
        <button onClick={() => setCounter(fake + 1)}>Fake+</button>
    </>
}

export const SetIntervalExample = () => {
    console.log('Interval Example')

    const [counter, setCounter] = useState(0)
    const [fake, setFake] = useState(0)

    useEffect(() => {

        setInterval(() => {
            console.log('tick ' + 1)
            setCounter(state => state + 1)
        }, 2000)


    }, [])

    return <>
        Hello,
        fake: {fake}
        counter: {counter}
        {/*<button onClick={() => setCounter(counter + 1)}> Count+ </button>
        <button onClick={() => setFake(fake + 1)}> Fake+ </button>*/}
    </>
}