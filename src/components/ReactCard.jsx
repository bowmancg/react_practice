import React from "react";
import ReactDate from "./ReactDate";

function ReactCard(props) {
    return (
        <div className="mb-3" id="reactcard">
            <div className="card text-dark">
            <ReactDate date={props.date} />
            <h3>{props.title}</h3>
            </div>
        </div>
    )
}

export default ReactCard;