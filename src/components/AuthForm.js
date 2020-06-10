import React from "react"

function AuthForm({ title, setFakeToken }) {
    return (
        <form onSubmit={(event) => {
                event.preventDefault()
                setFakeToken(true)
            }}>
            <p>{title}</p>
            <input placeholder="Enter username"/>
            <input placeholder="Enter password"/>
            <input type="submit"/>
        </form>
    )
}

export default AuthForm