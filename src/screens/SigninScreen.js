import React from "react"
import AuthFrom from "../components/AuthForm"

function SigninScreen({ setFakeToken }) {
    return (
        <div id="sign-in-container">
            <AuthFrom title="Sign-Up" setFakeToken={setFakeToken}/>
            <AuthFrom title="Sign-In" setFakeToken={setFakeToken}/>
        </div>
    )
}

export default SigninScreen