import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getLeaderboardThunk } from '../../store/session'
import SingleUser from "../SingleUser"

import './Leaderboard.css'

export function Leaderboard() {
    const dispatch = useDispatch();
    let leaderboard = useSelector(state => state.session.leaderboard);

    useEffect(() => {
        dispatch(getLeaderboardThunk())

    }, [dispatch])
    if (!leaderboard) {
        return;
    }
    // turn users into an array
    for (let user of leaderboard) {
        user.index = leaderboard.indexOf(user)
    }



    return (
        <div className='leaderboard-outermost'>
            <h1>
                Leaderboard
            </h1>
            {
                leaderboard?.map((user) => {
                    console.log(user);
                    return (
                        <SingleUser user={user} />
                    )
                })
            }
        </div>
    )
}
