import './SingleUser.css'

export default function SingleUser(user)
{
    user = user.user;
    let classTag = 'single-user-external';
    if (user.index < 3)
    {
        classTag = `${classTag} champion${user.index + 1}`
    }
    return (
        <div className={classTag}>
            <div className='single-user-name'>
                {user.index + 1}. {user.username}
            </div>
            <div className='single-user-kill-count'>
                Kills: {user.killCount}
            </div>
        </div>
    )
}
