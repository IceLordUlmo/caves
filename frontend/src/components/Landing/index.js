import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import './Landing.css'
import Combat from "../Combat";

export function Landing() {
    const sessionUser = useSelector(state => state.session.user);

    return (
        <div className='landing-container'>
            <div className='landing-div-one'>
                <div className='landing-div-one-texts'>
                    <h2 className='landing-div-one-header'>

                    </h2>
                    <p className='landing-div-one-p'> </p>

                </div>
                <div className='landing-div-one-image'>
                    <img></img>
                </div>
            </div>
            <div className='landing-div-two'>
                <h3 className='landing-div-two-subtitle'>
                    Subtitle
                </h3>
                <p className='landing-div-two-caption'>Caption</p>
            </div>
            <div className='landing-div-three'>
                <Link className='landing-div-three-link' to='/postcombat'>
                    <Combat />
                </Link>
                <Link className='landing-div-three-link' to='/leaderboard'>
                    Leaderboard
                </Link>
                <Link className='landing-div-three-link' to='/groups/new'>
                    S
                </Link>
            </div>
            <div className='landing-div-four'>
                <div className='join-fleetup'>

                </div>
            </div>
        </div>
    )
}
