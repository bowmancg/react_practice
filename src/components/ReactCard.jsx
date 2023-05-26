import React from "react";
import ReactDate from "./ReactDate";

function ReactCard(props) {
    return (
        <div className="ReactCard" id="reactcard">
            <div className="card">
            <ReactDate date={props.date} />
            <h3>{props.title}</h3>
            </div>
        </div>
    )
}

export default ReactCard;