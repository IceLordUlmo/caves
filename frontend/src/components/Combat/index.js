import { useEffect } from 'react';
import * as groupActions from '../../store/session';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import './Combat.css'

export default function Combat() {
    const dispatch = useDispatch();
    const sessionUser = useSelector(state => state.session.user);

    const killData = {

    }
    useEffect(() => { }, [sessionUser])

    console.log(!(!(sessionUser)))

    if (sessionUser) {
        killData.newKills = 1;
        killData.id = sessionUser.id;
    }

    const fightGoblin = () => {
        dispatch(groupActions.changeKillCountUser(killData))
    }
    const enabled = !(!(sessionUser))
    return (
        <div>
            <button className={enabled ? 'combat-active' : 'hidden'} onClick={fightGoblin} disabled={!enabled}>Fight a Goblin</button>
        </div>
    )
}
