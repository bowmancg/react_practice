import React from "react";

const CardFilter = (props) => {
    const dropdownChangeHandler = (event) => {
        props.onChangeFilter(event.target.value)
    }

    return (
        <div className="">
            <label>Filter by Year</label>
            <select value={props.selected} onChange={dropdownChangeHandler}>
                <option value="">None</option>
                <option value="2023">2023</option>
                <option value="2022">2022</option>
                <option value="2021">2021</option>
                <option value="2020">2020</option>
                <option value="2019">2019</option>
            </select>
        </div>
    )
}

export default CardFilter