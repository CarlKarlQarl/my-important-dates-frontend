import React from "react"
import AuthFrom from "../components/AuthForm"

function SigninScreen({ setToken }) {
    return (
        <div id="sign-in-container">
            <AuthFrom title="Sign-Up" route="signup" setToken={setToken}/>
            <AuthFrom title="Sign-In" route="login" setToken={setToken}/>
        </div>
    )
}

export default SigninScreen