import React from 'react'
import logo from '../attachments/logo.svg'
import logo_title from '../attachments/softLanding.svg'

import './LoginPage.css'

export default function LoginPage() {
    return (
        <div className='page'>
            <div className='topPage'>
                <img id='logo' src={logo} alt='logo' />
                <img id='logo_title' src={logo_title} alt='logo_title' />
            </div>
            <div className='bodyPage'>
                <form>
                    <div className='smallInput'>
                        <label>
                            <p>First Name</p>
                            <input  type='text' required></input>
                        </label>
                        <label>
                            <p>Last Name</p>
                            <input  type='text' required></input>
                        </label>
                    </div>
                    <label>
                        <p>Email</p>
                        <input  type='email' required></input>
                    </label>
                    <input className='bottomPage' type='submit' value='Sign Up'></input>
                </form>

            </div>
            <div className='bottomPage'>
            </div>
        </div>
    )
}
