import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import './Landing.css'
import Combat from "../Combat";

export function Landing() {
    const sessionUser = useSelector(state => state.session.user);

    useEffect(() => { }, [sessionUser])

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
                {sessionUser ? (
                    <div>
                        <h3 className='landing-div-two-subtitle'>
                            Welcome, {sessionUser.username}
                        </h3>
                        <p className='landing-div-two-caption'>{sessionUser.killCount} is your score.</p>
                    </div>) :
                    (<h3></h3>)
                }
            </div>
            <div className='landing-div-three'>
                <Link className='landing-div-three-link' to='/'>
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
