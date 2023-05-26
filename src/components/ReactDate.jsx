import React from "react";

function ReactDate(props) {
    const month = props.date.toLocaleString('en-US', { month: 'long'});
    const day = props.date.toLocaleString('en-US', { day: '2-digit' });
    const year = props.date.getFullYear();
    return (
        <div>
            <p className="fs-3">{year}</p>
            <p className="fs-3">{month}</p>
            <p className="fs-3">{day}</p>
        </div>
    )
}

export default ReactDate;