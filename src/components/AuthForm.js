import React, { useState } from "react"
import Axios from "../api/Axios"
import { useHistory } from "react-router-dom"

function AuthForm({ title, route, setToken }) {
    const [ email, setEmail ] = useState("")
    const [ password, setPassword ] = useState("")
    const history = useHistory()

    return (
        <form 
            id="authform-form"
            onSubmit={(event) => {
                event.preventDefault()
                fetch("https://peaceful-sierra-47869.herokuapp.com/signup", {
                    method: 'POST',
                    headers: {
                      'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        name: "Karl",
                        email,
                        password
                    })
                }).then(response => console.log(response))
                .catch(error => console.log(error))

                // setToken(true)
                // history.push("/home")
            }
        }>
            <p>{title}</p>
            <input 
                value={email} 
                onChange={(newEmail) => setEmail(newEmail.target.value)} 
                placeholder="Enter email"
            />
            <input 
                value={password} 
                onChange={(newPassword) => setPassword(newPassword.target.value)}
                placeholder="Enter password"
            />
            <input type="submit"/>
        </form>
    )
}

export default AuthForm