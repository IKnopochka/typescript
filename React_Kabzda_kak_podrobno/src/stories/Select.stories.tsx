import React, {useState} from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react';
import Select from '../components/Select/Select';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'Select',
    component: Select
} as ComponentMeta<typeof Select>;


export const SelectExampleWithValue: ComponentStory<typeof Select> = () => {
    const [value, setValue] = useState(null)



    // @ts-ignore
    return <Select items={
            [
                {title: 'LA', value: 1},
                {title: 'Minsk', value: 2},
                {title: 'SanDiego', value: 3},
                {title: 'Limassol', value: 4},
                {title: 'Pinsk', value: 5}
            ]
        }
                value={value}
                onChange={setValue}>Select</Select>
}

export const SelectExampleWithoutValue: ComponentStory<typeof Select> = () => {
    const [value, setValue] = useState(null)
    // @ts-ignore
    return <Select items={
        [
            {title: 'LA', value: 1},
            {title: 'Minsk', value: 2},
            {title: 'SanDiego', value: 3},
            {title: 'Limassol', value: 4},
            {title: 'Pinsk', value: 5}
        ]
    }
                   value={value}
                   onChange={setValue}>Select</Select>;
}

