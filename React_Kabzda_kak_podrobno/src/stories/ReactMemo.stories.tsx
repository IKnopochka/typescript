import {useState} from "react";
import React from "react";

export default {
    title: 'React.memo demo'
}

const NewMessagesCounter = (props: any) => {
    return <div>{props.count}</div>
}

const UsersSecret = (props: { users: Array<string> }) => {
    console.log("Users")
    return <div>
        {props.users.map((u, i) => <div>{u}</div>)}
    </div>
}
const Users = React.memo(UsersSecret)

export const Example1 = () => {
    const [counter, setCounter] = useState(0)
    const [user, setUser] = useState(['Michal', 'Iryna', 'Myshka'])

    const addUser = () => {
        setUser([...user, "Kar" + counter])
    }

    return <>
        <button onClick={() => setCounter(counter + 1)}></button>
        <button onClick={addUser}></button>
        <NewMessagesCounter count={counter}/>
        <Users users={user}/>
    </>
}