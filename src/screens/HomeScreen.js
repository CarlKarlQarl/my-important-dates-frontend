import React from "react"
import { useHistory } from "react-router-dom"
import NewEvent from "../components/NewEvent"
import EventList from "../components/EventList"

function HomeScreen({ date, setDate, events, setEvents, fakeToken, setFakeToken }) {
    const history = useHistory()

    return (
        <div id="home-div">
            {fakeToken 
                ? <>
                    <h1>Welcome User123!</h1>
                    <NewEvent 
                        date={date} 
                        setDate={setDate}
                        events={events}
                        setEvents={setEvents}  
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