import {useMemo, useState} from "react";
import React from "react";

export default {
    title: 'useMemo'
}


export const DifficultCounting = () => {
    const [a, setA] = useState<number>(0)
    const [b, setB] = useState<number>(0)

    let resultA = 1;
    let resultB = 1;

    resultA = useMemo(() => {
        let rez = 1;
        for (let i = 1; i <= a; i++) {
            let fake = 0;
            while (fake < 10000000) {
                fake++;
                let fakeValue = Math.random()
            }
            rez *= i;
        }
        return rez
    }, [a])


    for (let i = 1; i <= b; i++) {
        resultB *= i;
    }

    return <>
        <input value={a} onChange={(e) => setA(+e.currentTarget.value)}/>
        <input value={b} onChange={(e) => setB(Number(e.currentTarget.value))}/>
        <hr/>
        <div>Result A = {resultA}</div>
        <div>Result B = {resultB}</div>

    </>
}

///Next one

const UsersSecret = (props: { users: Array<string> }) => {
    console.log('UsersSecret redrawing')
    return <div>
        {props.users.map((m, i) => <div key={i}>{m}</div>)}
    </div>
}

const Users = React.memo(UsersSecret)

export const useMemoHelpsReactMemo = () => {
    console.log('Main component')
    let [counter, setCounter] = useState(0)
    let [users, setUsers] = useState(['Irina', 'Michael', 'Myshka'])

    let newArrayOfUsers =  useMemo(() => {
        return users.filter(f => f.toLowerCase().indexOf('i') > -1)
    }, [users])


    return <>
        <button onClick={() => setCounter(counter + 1)}>+</button>
        <button onClick={() => setUsers([...users, 'Kinder'])}>addUser</button>
        {counter}

        <Users users={newArrayOfUsers}/>
    </>
}

//Next one

