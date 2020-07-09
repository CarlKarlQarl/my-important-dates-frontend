import React from "react"
import { useHistory } from "react-router-dom"

function AuthForm({ title, route, setToken }) {
    const history = useHistory()

    return (
        <form 
            id="authform-form"
            onSubmit={(event) => {
                event.preventDefault()
                setToken(true)
                history.push("/home")
            }
        }>
            <p>{title}</p>
            <input placeholder="Enter username"/>
            <input placeholder="Enter password"/>
            <input type="submit"/>
        </form>
    )
}

export default AuthForm