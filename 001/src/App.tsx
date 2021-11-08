import React from 'react';
import './App.css';
import Accordion from './components/accordion/Accordion';

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

export default App;
