import React from 'react';
import './App.css';

//function declaration
function App() {
    //function does smth useful
    //must return JSX
    console.log("App rendering")
    return (
        <div>
            <AppTitle/>
            <Rating/>
            <Accordion/>
            <Rating/>
        </div>
    );
}

function AppTitle() {
    console.log("AppTitle rendering")
    return <>This is APP component</>
}

function Rating() {
    console.log("Rating rendering")
    return (
        <>
            <Star/>
            <Star/>
            <Star/>
            <Star/>
            <Star/>
        </>
    )
}

function Star() {
    console.log("Star rendering")
    return <div>
        Star
    </div>
}

function Accordion() {
    console.log("Accordion rendering")
    return <div>
        <AccordionTitle/>
        <AccordionBody/>


    </div>
}

function AccordionTitle() {
    console.log("AccordionTitle rendering")
    return <><h3>Menu</h3></>
}

function AccordionBody() {
    console.log("AccordionBody rendering")
    return <>
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>
    </>
}

export default App;
