import React from "react"

function reducer(state = {events: []}, action){
    switch (action.type){
        case "add_event":
            return [...state.events, action.payload]
        default:
            return state
    }
}

export default reducer