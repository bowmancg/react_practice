import React from "react";
import ReactDate from "./ReactDate";

function ReactCard(props) {
    return (
        <div className="ReactCard" id="reactcard">
            <div className="card">
            <ReactDate date={props.date} />
            </div>
        </div>
    )
}

export default ReactCard;