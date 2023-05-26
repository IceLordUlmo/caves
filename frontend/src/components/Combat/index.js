import * as groupActions from '../../store/session';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';

export default function Combat() {
    const dispatch = useDispatch();
    const sessionUser = useSelector(state => state.session.user);

    const killData = {
        newKills: 1,
        id: sessionUser.id
    }

    const fightGoblin = () => {
        dispatch(groupActions.changeKillCountUser(killData))
    }

    return (
        <div>
            <button onClick={fightGoblin}>Fight a Goblin</button>
        </div>
    )
}
