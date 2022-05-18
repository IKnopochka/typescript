import React from "react";

export type propsCollapsed = boolean

type AccordionPropsType = {
    titleValue: string
    collapsed: propsCollapsed
    onClick: (collapsed: propsCollapsed) => void
    items: string[] //Array<string>
}

/*function Accordion(props: AccordionPropsType) {
    let [collapsed, setCollapsed] = useState(false)

    return <div >
        <div onClick={() => {setCollapsed(!collapsed)}}><AccordionTitle title={props.titleValue} /></div>
        {collapsed && <AccordionBody/>}
    </div>
}*/


function Accordion(props: AccordionPropsType) {
    console.log("Accordion rendering")
    if (props.collapsed) {
        return <div>
            <AccordionTitle title={props.titleValue} onClick={props.onClick} collapsed={props.collapsed}/>
            <AccordionBody items={props.items}/>
        </div>
    }
    return <div>
        <AccordionTitle title={props.titleValue} onClick={props.onClick} collapsed={props.collapsed}/>
    </div>
}

type AccordionTitlePropsType = {
    title: string
    collapsed: propsCollapsed
    onClick: (collapsed: propsCollapsed) => void
}

function AccordionTitle(props: AccordionTitlePropsType) {
    console.log("AccordionTitle rendering")
    return <h3 onClick={() => props.onClick(!props.collapsed)}>{props.title}</h3>
}

type AccordionBodyPropsType = {
    items: string[] //Array<string>
}

function AccordionBody(props: AccordionBodyPropsType) {
    console.log("AccordionBody rendering")
    return <ul>
        {props.items.map((m, index) => {<li key={index}>{m}</li>
        })}
    </ul>
}

export default Accordion;