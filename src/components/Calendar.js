import React from "react"
import Day from "./Day"

function Calendar({ month, length }) {
    let weeks = []

    for (let i = 0; i < length; i++){
        weeks.push(<Day date={i + 1}/>)
    }

    return (
        <div id="calendar-container">
            <h1 id="month-h1">{month}</h1>
            <div id="weeks-container">
                {weeks}
            </div>
        </div>
    )
}

export default Calendar