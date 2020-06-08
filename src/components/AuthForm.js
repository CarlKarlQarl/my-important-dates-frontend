import React from "react"

function AuthForm({ title }) {
    return (
        <form>
            <p>{title}</p>
            <input placeholder="Enter username"/>
            <input placeholder="Enter password"/>
            <input type="submit"/>
        </form>
    )
}

export default AuthForm