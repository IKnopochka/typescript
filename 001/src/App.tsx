import React from 'react';
import './App.css';
import Accordion from './components/accordion/Accordion';
import {Rating} from "./components/rating/Rating";

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

export default App;
