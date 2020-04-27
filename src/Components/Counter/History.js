import React from "react";

const History = (props) => {
    if (props.allClicks.length === 0) {
        return (
            <p>
                Click the buttons to use the app
            </p>
        )
    }
    return (
        <div>
            button press history : {props.allClicks.join(' ')}
        </div>
    )
};

export default History