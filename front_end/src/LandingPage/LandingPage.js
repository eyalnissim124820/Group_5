import React from 'react'
import logo from '../attachments/logo.svg'
import logo_title from '../attachments/softLanding.svg'

import '../LandingPage/LandingPage.css'

export default function LandingPage() {
    return (
        <div className='page'>
            <div className='topPage'>
                <img id='logo' src={logo} alt='logo' />
                <img id='logo_title' src={logo_title} alt='logo_title' />
            </div>
            <div className='bodyPage'>
                <p>We will help you to
                    get access to different cultures in various areas!</p>
            </div>
            <div className='bottomPage'>
                <p id='discription'>create a comfortable first step into another culture</p>
                <button id='logInButton'>Log in</button>
            </div>
        </div>
    )
}
