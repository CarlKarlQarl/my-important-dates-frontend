import React from "react"
import { useHistory } from "react-router-dom"

function AuthForm({ title, setFakeToken }) {
    const history = useHistory()

    return (
        <form 
            id="authform-form"
            onSubmit={(event) => {
                event.preventDefault()
                setFakeToken(true)
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