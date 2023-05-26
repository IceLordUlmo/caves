import './SingleUser.css'

export default function SingleUser(user) {
    user = user.user;
    return (
        <div>
            {user.index}. {user.username}
            Kills: {user.killCount}
        </div>
    )
}
