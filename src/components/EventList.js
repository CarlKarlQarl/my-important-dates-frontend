import React from "react"

const formatDate = (date) => {
    let fullString = date.toString()
    let dateArray = fullString.split(" ")
    let MDYArray = dateArray.slice(1, 4)
    let MDYString = MDYArray.join(" ")
    return MDYString
}

function EventList({ events }) {
    const list = events.map((event) => {
        return <div key={event.title}>
            <p>Title: {event.title}</p>
            <p>Description: {event.description}</p>
            <p>Date: {formatDate(event.date)}</p>
        </div>
    })

    return (
        <div id="event-list-div">
            <h1>User's Event History</h1>
            {list}
        </div>
    )
}

export default EventList