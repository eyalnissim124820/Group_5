import React from 'react'
import { useNavigate } from "react-router-dom";


import logo from '../attachments/logo.svg'
import logo_title from '../attachments/softLanding.svg'

import './LoginPage.css'

export default function LoginPage() {

    const navigate = useNavigate()
    const toCultureSelection = () => { navigate('/CultureSelection') }

    function handleSubmit(e){
        e.preventDefault()
        toCultureSelection()
    }


    return (
        <div className='page'>
            <div className='topPage'>
                <img id='logo' src={logo} alt='logo' />
                <img id='logo_title' src={logo_title} alt='logo_title' />
            </div>
            <div className='bodyPage'>
                <form onSubmit={handleSubmit}>
                    <label>
                        <p >First Name</p>
                        <input type='text' required></input>
                    </label>
                    <label>
                        <p>Last Name</p>
                        <input type='text' required></input>
                    </label>
                    <label>
                        <p>Email</p>
                        <input type='email' required></input>
                    </label>
                    <label>
                        <p>Password</p>
                        <input type='password' required></input>
                    </label>
                    <div id='loginbutton-container'>
                    <input id='logInButton' type='submit' value='Sign Up'></input>
                    </div>
                </form>

            </div>
            <div className='bottomPage'>
            </div>
        </div>
    )
}
