import React from "react";

function Accordion(props: any) {
    console.log("Accordion rendering")
    return <div>
        <AccordionTitle title={props.title}/>
        <AccordionBody body={props.body}/>
    </div>
}

function AccordionTitle(props: any) {
    console.log("AccordionTitle rendering")
    return <h3>{props.title}</h3>
}

function AccordionBody(props: any) {
    console.log("AccordionBody rendering")
    return <>{props.body}</>
}

export default Accordion;