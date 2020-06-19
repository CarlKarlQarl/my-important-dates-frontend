import React, { useState } from "react"
import { useHistory } from "react-router-dom"
import { useSelector, useDispatch } from "react-redux"
import NewEvent from "../components/NewEvent"
import EventList from "../components/EventList"

function HomeScreen({ fakeToken, setFakeToken }) {
    const [ date, setDate ] = useState(new Date())

    const events = useSelector(state => state)
    const dispatch = useDispatch()

    const history = useHistory()

    return (
        <div id="home-div">
            {fakeToken 
                ? <>
                    <h1>Welcome User123!</h1>
                    <NewEvent 
                        date={date} 
                        setDate={setDate}
                        eventDispatch={dispatch}
                    />
                    <EventList events={events}/>
                </>
                : <h1>You are not logged in! Get out of here!</h1>
            }
            <button onClick={() => {
                    setFakeToken("")
                    history.push("/")
            }}>{fakeToken ? "Log-out" : "Return to Log-in"}</button>
        </div>
    )
}

export default HomeScreen