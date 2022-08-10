import React, {useReducer} from "react";
import {reducer} from "./reducer";

type AccordionPropsType = {
    titleValue: string
}




function UncontrolledAccordion(props: AccordionPropsType) {
    //let [collapsed, setCollapsed] = useState(false)
    let [state, setCollapsed] = useReducer(reducer, {
        collapsed: false
    })


    return <div>
        {/*<AccordionTitle title={props.titleValue} onClick={() => {
            setCollapsed(!collapsed)
        }}/>*/}
        <AccordionTitle title={props.titleValue} onClick={() => setCollapsed({type: "TOGGLE-COLLAPSED"})}/>
        {state.collapsed && <AccordionBody/>}
    </div>
}


/*function Accordion(props: AccordionPropsType) {
    console.log("Accordion rendering")
    if (props.collapsed) {
        return <div>
            <AccordionTitle title={props.titleValue}/>
            <AccordionBody/>
        </div>
    }

    return <div>
        <AccordionTitle title={props.titleValue}/>
    </div>
}*/

type AccordionTitlePropsType = {
    title: string
    onClick: () => void
}

function AccordionTitle(props: AccordionTitlePropsType) {
    console.log("AccordionTitle rendering")
    return <h3 onClick={() => {
        props.onClick()
    }}>{props.title}</h3>
}

function AccordionBody() {
    console.log("AccordionBody rendering")
    return <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
    </ul>
}

export default UncontrolledAccordion;