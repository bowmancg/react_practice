import React, { useState } from "react";
import ReactDate from "./ReactDate";

function ReactCard(props) {
    const [title, setTitle] = useState(props.title)
    const clickHandler = () => {
        setTitle('Updated!')
        console.log(title)
    }
    return (
        <div className="mb-3" id="reactcard">
            <div className="card text-dark">
            <h3>{title}</h3>
            <button className="rounded-pill bg-secondary" onClick={clickHandler}>Click</button>
            <ReactDate date={props.date} />
            </div>
        </div>
    )
}

export default ReactCard;