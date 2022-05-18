import React, {useState} from 'react';
import './App.css';
import Accordion, {propsCollapsed} from './components/accordion/Accordion';
import {Rating, RatingValueType} from "./components/rating/Rating";
import {OnOff, propsSwitch} from "./components/OnOff/OnOff";
import UncontrolledAccordion from "./components/Uncontrolled accordeon/UncontrolledAccordion";
import {UncontrolledRating} from "./components/UncontrolledRating/UncontrolledRating";
import {UncontrolledOnOff} from "./components/UncontrolledOnOff/UncontrolledOnOff";
import {
    ControlledCheckBox,
    ControlledInput, ControlledSelect,
    GetValueOfUncontrolledInputByButtonPress,
    TrackValueOfUncontrolledInput,
    UncontrolledInput
} from "./components/UncontrolledInput/UncontrolledInput";

//function declaration
function App() {

    let [ratingValue, setRatingValue] = useState<RatingValueType>(0)

    let [accordionValue, setAccordionValue] = useState<propsCollapsed>(false)

    let [onOffValue, setOnOffValue] = useState<propsSwitch>(false)

    const items = [ "1", "2", "3"]

    //function does smth useful
    //must return JSX
    console.log("App rendering")
    return (
        <div>

            <PageTitle title={"This is APP component"}/>
            <PageTitle title={"The 2nd key"}/>

            <Accordion titleValue={"Menu"} collapsed={accordionValue} onClick={setAccordionValue} items={items}/>
            <Accordion titleValue={"Ingredients"} collapsed={accordionValue} onClick={setAccordionValue} items={items}/>

            <UncontrolledAccordion titleValue={"Uncontrolled Menu"}/>
            <UncontrolledAccordion titleValue={"Uncontrolled Ingredients"}/>

            <Rating value={ratingValue} onClick={setRatingValue}/>

            <UncontrolledRating />

            <UncontrolledOnOff />

            <OnOff value={onOffValue} onClick={setOnOffValue}/>

            <div><UncontrolledInput/></div>

            <TrackValueOfUncontrolledInput/>

            <GetValueOfUncontrolledInputByButtonPress/>

            <ControlledInput/>

            <ControlledCheckBox/>

            <ControlledSelect/>

        </div>
    );
}

type PageTitleProps = {
    title: string
}

function PageTitle(props: PageTitleProps) {
    console.log("PageTitle rendering")
    return <h1>{props.title}</h1>
}

export default App;
