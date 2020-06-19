import React, { useState } from "react"
import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css";

function NewEvent({ date, setDate, eventDispatch }) {
    const [ title, setTitle ] = useState("")
    const [ description, setDescription ] = useState("")

    return (
        <div
            id="new-event-div"
        >
            <h3>Add New Event</h3>
            <form
                id="new-event-form"
                onSubmit={(event) => {
                    event.preventDefault()
                    eventDispatch({type: "add_event", payload: {title, description, date}})
                }}
            >
                <input 
                    placeholder="Enter title"
                    name="title"
                    value={title}
                    onChange={(event) => setTitle(event.target.value)}
                />
                <input 
                    placeholder="Enter description"
                    name="description"
                    value={description}
                    onChange={(event) => setDescription(event.target.value)}    
                />
                <DatePicker 
                    selected={date}
                    onChange={setDate}
                />
                <input type="submit" value="Add Event"/>
            </form>
        </div>
    )
}

export default NewEvent