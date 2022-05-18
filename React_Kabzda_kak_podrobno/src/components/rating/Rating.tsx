import React from "react";

export type RatingValueType = 0 | 1 | 2 | 3 | 4 | 5

type PropsRating = {
    value: RatingValueType
    onClick: (value: RatingValueType) => void
}


export const Rating = (props: PropsRating) => {

    return <div>
        <Star selected={props.value > 0} onClick={props.onClick} value={1}/>
        <Star selected={props.value > 1} onClick={props.onClick} value={2}/>
        <Star selected={props.value > 2} onClick={props.onClick} value={3}/>
        <Star selected={props.value > 3} onClick={props.onClick} value={4}/>
        <Star selected={props.value > 4} onClick={props.onClick} value={5}/>
    </div>
}

type PropsStar = {
    selected: boolean
    value: RatingValueType
    onClick: (value: RatingValueType) => void
}

function Star(props: PropsStar) {

    return <span onClick={() => props.onClick(props.value)}>{props.selected ? <b>Star </b>: "Star "} </span>

    /*    if (props.selected) {
            return <span><b>Star </b></span>
        } else {
            return <span>Star </span>
        }*/
}

/*
export function Rating() {
    console.log("Rating rendering")

    /!*    if (props.value === 1) {
            return (
                <div>
                    <Star selected={true}/>
                    <Star selected={false}/>
                    <Star selected={false}/>
                    <Star selected={false}/>
                    <Star selected={false}/>
                </div>
            )
        }
        if (props.value === 2) {
            return (
                <div>
                    <Star selected={true}/>
                    <Star selected={true}/>
                    <Star selected={false}/>
                    <Star selected={false}/>
                    <Star selected={false}/>
                </div>
            )
        }
        if (props.value === 3) {
            return (
                <div>
                    <Star selected={true}/>
                    <Star selected={true}/>
                    <Star selected={true}/>
                    <Star selected={false}/>
                    <Star selected={false}/>
                </div>
            )
        }
        if (props.value === 4) {
            return (
                <div>
                    <Star selected={true}/>
                    <Star selected={true}/>
                    <Star selected={true}/>
                    <Star selected={true}/>
                    <Star selected={false}/>
                </div>
            )
        }
        if (props.value === 5) {
            return (
                <div>
                    <Star selected={true}/>
                    <Star selected={true}/>
                    <Star selected={true}/>
                    <Star selected={true}/>
                    <Star selected={true}/>
                </div>
            )
        }*!/

    let [value, setValue] = useState(false)

    return (
        <div>
            <div id='1' onClick={() => {setValue(!value)}}>{ value && <Star />}</div>
            <div id='2' onClick={() => {setValue(!value)}}><Star /></div>
            <div id='3' onClick={() => {setValue(!value)}}><Star /></div>
            <div id='4' onClick={() => {setValue(!value)}}><Star /></div>
            <div id='5' onClick={() => {setValue(!value)}}><Star /></div>
        </div>
    )
}

type PropsStar = {

    selected?: boolean
}

function Star(props: PropsStar) {
    console.log("Star rendering")
    if (props.selected === true) {
        return <span><b>Star </b></span>
    } else {
        return <span>Star </span>
    }

}*/
