import {useCallback, useMemo, useState} from "react";
import React from "react";

export default {
    title: 'useCallback'
}

export const UsingCallback = () => {
    console.log('Main component')
    let [counter, setCounter] = useState(0)
    let [books, setBooks] = useState(['React', 'JS', 'HTML'])

    const memorizedAddBook = useCallback(() => {
        setBooks([...books, 'Angular'])
    }, [books])

    return <>
        <button onClick={() => setCounter(counter + 1)}>+</button>
        {counter}
        <Book addBook={memorizedAddBook}/>

    </>
}

const BooksSecret = (props: {addBook: () => void}) => {
    debugger
    console.log('BooksSecret redrawing')
    return <div>
        <button onClick={props.addBook}>add Book</button>
    </div>
}



const Book = React.memo(BooksSecret)

