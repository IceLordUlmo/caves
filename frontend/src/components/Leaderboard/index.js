import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getLeaderboardThunk } from '../../store/session'
import SingleUser from "../SingleUser"
import { Link } from 'react-router-dom'

import './Leaderboard.css'

export function Leaderboard()
{
    const dispatch = useDispatch();
    let leaderboard = useSelector(state => state.session.leaderboard);

    useEffect(() =>
    {
        dispatch(getLeaderboardThunk())

    }, [dispatch])
    if (!leaderboard)
    {
        return;
    }
    // turn users into an array
    for (let user of leaderboard)
    {
        user.index = leaderboard.indexOf(user)
    }



    return (
        <div className='leaderboard-outermost'>
            <h1>
                Leaderboard
            </h1>
            <div className='leaderboard-column'>
                {
                    leaderboard?.map((user) =>
                    {
                        console.log(user);
                        return (<div className='leaderboard-user'>
                            <SingleUser user={user} />
                        </div>
                        )
                    })
                }
            </div>
            <div className='leaderboard-exit'>
                <Link to='/'>Back to Landing</Link>
            </div>
        </div>

    )
}
