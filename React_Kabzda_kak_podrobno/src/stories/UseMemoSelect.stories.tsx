import React, {useMemo, useState} from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react';
import Select from '../components/Select/Select';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'UseMemoSelect',
    component: Select
} as ComponentMeta<typeof Select>;

const SelectMemo = React.memo(Select)


export const SelectExampleWithValue: ComponentStory<typeof Select> = () => {

    console.log("Main Function Renders")

    const [value, setValue] = useState(null)
    const [cities, setCities] = useState([
        {title: 'LA', country: 'USA', value: 1, nationalities: 150},
        {title: 'Minsk', country: 'Belarus', value: 2, nationalities: 10},
        {title: 'SanDiego', country: 'USA', value: 3, nationalities: 150},
        {title: 'Limassol', country: 'Cyprus', value: 4, nationalities: 110},
        {title: 'Pinsk', country: 'Belarus', value: 5, nationalities: 10}
    ])

    let newArrayOfCities = useMemo(() => {return cities.filter((f, i) => f.country === 'USA')}, [cities])


    const [counter, setCounter] = useState(0)
    const onSetCounter = () => {
        console.log("Counter renders")
        setCounter(counter + 1)
    }

    // @ts-ignore
    // @ts-ignore
    return <>
        <button onClick={onSetCounter}>+</button>
        {counter}
        <hr/>
        <SelectMemo items={newArrayOfCities}
                value={value}
                onChange={setValue}>Select</SelectMemo>

    </>

}


