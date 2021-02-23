import { Button } from '@material-ui/core';
import React from 'react'
import { auth, provider } from '../../utility/firebase';
import './Login.css'
import { useStateValue } from '../../utility/StateProvider';
import {actionTypes} from '../../utility/reducer'

function Login() {
    const [state,dispatch] = useStateValue();
    const signIn = () => {
        auth.signInWithPopup(provider)
        .then(result => {
            console.log(result);
            dispatch({
                type: actionTypes.SET_USER,
                user: result.user
            })
        })
        .catch(err => alert(err.message))

    }
    return (
        <div className="login">
            <div className="login__container">
                <img src="https://cdn.mos.cms.futurecdn.net/SDDw7CnuoUGax6x9mTo7dd-970-80.jpg.webp" alt=""/>
                
                <h1>Sign in to Clever Programmer HQ</h1>
                <p>cleverprogramer.slack.com</p>
                <Button onClick={signIn}>Sign In with Google</Button>
            </div>
        </div>
    )
}

export default Login
