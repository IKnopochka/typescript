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
            <PageTitle title={"This is APP component"}/>
            <PageTitle title={"The 2nd key"}/>
            <Rating value={0} />
            <Accordion title={"Menu"} body={<ul>
                <li>1</li>
                <li>2</li>
                <li>3</li>
            </ul>}/>
            <Accordion title={"Ingredients"} body={<ul>
                <li>4</li>
                <li>5</li>
                <li>6</li>
            </ul>}/>
            <Rating value={1} />
            <Rating value={2} />
            <Rating value={3} />
            <Rating value={4} />
            <Rating value={5} />
        </div>
    );
}

function PageTitle(props: any) {
    console.log("PageTitle rendering")
    return <h1>{ props.title }</h1>
}

export default App;
