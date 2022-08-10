import React, {useState, KeyboardEvent, useEffect} from 'react';
import s from './Select.module.css'

type ItemType = {
    title: string
    value: any
}

export type SelectPropsTypes = {
    value?: any
    onChange: (value: any) => void
    items: ItemType[]
}

const Select = (props: SelectPropsTypes) => {
    console.log('Select rerendering')
    const [active, setActive] = useState(false)
    const [hoveredElementValue, setHoveredElementValue] = useState(props.value)

    const showActivity = () => setActive(!active)

    const selectedItem = props.items.find(f => f.value === props.value)
    const hoveredItem = props.items.find(f => f.value === hoveredElementValue)

    useEffect(() => {
        setHoveredElementValue(props.value)
    }, [props.value])

    const setNewValue = (newValue: any) => {
        props.onChange(newValue)
        setActive(!active)
    }

    const onKeyUp = (e: KeyboardEvent<HTMLDivElement>) => {
        if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
            for (let i = 0; i < props.items.length; i++) {
                if (hoveredElementValue === props.items[i].value) {
                    const pretendedElement =  e.key === 'ArrowDown' ? props.items[i + 1] : props.items[i - 1]
                    if (pretendedElement) {
                        props.onChange(pretendedElement.value)
                        return;
                    }
                }
            }
            if(!selectedItem) {
                props.onChange(props.items[0].value)
            }
        }
        if (e.key === 'Enter' || e.key === 'Escape') {
            setActive(false)
        }
    }
    return (
        <>
            <div className={s.select} onKeyUp={onKeyUp} tabIndex={0}
            >
                <span className={s.main} onClick={showActivity}>{selectedItem && selectedItem.title}</span>
                {
                    active &&
                    <div className={s.items}>
                        {props.items.map(m => <div
                            onMouseEnter={() => {
                                setHoveredElementValue(m.value)
                            }}
                            className={s.item + ' ' + (hoveredItem === m ? s.selected : '')}
                            key={m.value}
                            onClick={() => setNewValue(m.value)}
                        >{m.title}
                        </div>)}
                    </div>
                }

            </div>
        </>
    )
};

export default Select;