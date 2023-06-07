import React, { useState } from "react";

const ReactForm = (props) => {

// example of destructuring
    const {
        onSubmit
    } = props

    const [enteredTitle, setEnteredTitle] = useState('')
    const [enteredDate, setEnteredDate] = useState('')
    // const [userInput, setUserInput] = useState({
    //     enteredTitle: '',
    //     enteredDate: '',
    // })
    const titleChangeHandler = (event) => {
        setEnteredTitle(event.target.value)
    }

    const dateChangeHandler = (event) => {
        setEnteredDate(event.target.value)
    }
    const submitHandler = (event) => {
        event.preventDefault()

        onSubmit({
            title: enteredTitle,
            date: new Date(enteredDate)
        })
        // const cardData = {
        //     title: enteredTitle,
        //     date: new Date(enteredDate)
        // }
        // props.onSaveCardData(cardData)
        // setEnteredTitle('')
        // setEnteredDate('')
    }
    
    return (
        <form onSubmit={submitHandler}>
            <h3 className="text-center">React Form</h3>
            <div className="mb-3">
                <label>Title</label>
                <input type="text" value={enteredTitle} onChange={titleChangeHandler} />
            </div>
            <div className="mb-3">
                <p className="fs-3">{enteredTitle}</p>
                <p className="fs-3">{enteredDate}</p>
            </div>
            <div className="mb-3">
                <label>Date</label>
                <input type="date"  value={enteredDate} onChange={dateChangeHandler} />
            </div>
            <button type="submit" className="btn btn-success">Add</button>
        </form>
    )
}

export default ReactForm;