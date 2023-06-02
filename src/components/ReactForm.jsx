import React, { useState } from "react";

const ReactForm = () => {
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
    return (
        <form>
            <h3 className="text-center">React Form</h3>
            <div className="mb-3">
                <label>Title</label>
                <input type="text" onChange={titleChangeHandler} />
            </div>
            <div className="mb-3">
                <p className="fs-3">{enteredTitle}</p>
                <p className="fs-3">{enteredDate}</p>
            </div>
            <div className="mb-3">
                <label>Date</label>
                <input type="date" onChange={dateChangeHandler} />
            </div>
        </form>
    )
}

export default ReactForm;