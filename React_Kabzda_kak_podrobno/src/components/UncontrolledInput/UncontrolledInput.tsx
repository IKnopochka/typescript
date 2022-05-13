import React, {useRef, useState} from 'react';


export const UncontrolledInput = () => <input/>

export const TrackValueOfUncontrolledInput = () => {
    const[value, setValue] = useState('')
    return <><input onChange={(e) =>{
        setValue(e.currentTarget.value)
    } }/> - {value}</>
}

export const GetValueOfUncontrolledInputByButtonPress = () => {

    const[value, setValue] = useState('')

    const inputRef = useRef<HTMLInputElement>(null)
    const addValue = () => {
        const el = inputRef.current as HTMLInputElement
            setValue(el.value)
    }

    return <> <input ref={inputRef}/>
        <button onClick={addValue}>save</button> - actual value: {value}
    </>
}
export const ControlledInput = () => {
    const [parentValue, setParentValue] = useState('')
    return <input value={parentValue} onChange={(e) => {setParentValue(e.currentTarget.value)}}/>
}
export const ControlledCheckBox = () => {
    const [parentValue, setParentValue] = useState(false)
    return <div>
        <input type={"checkbox"}
               checked={parentValue}
               onChange={(e) => {setParentValue(e.currentTarget.checked)}}/>
    </div>
}
export const ControlledSelect = () => {
    const [parentValue, setParentValue] = useState<undefined | string>(undefined)
    return <div>
        <select value={parentValue} onChange={(e) => {setParentValue(e.currentTarget.value)}}>
            <option value={'1'}>none</option>
            <option value={"2"}>Minsk</option>
            <option value={"3"}>LA</option>
        </select>
    </div>
}

