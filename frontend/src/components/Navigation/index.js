import React from 'react';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import './Navigation.css';
//import { Logo } from './Logo/index'

function Navigation({ isLoaded }) {
    const sessionUser = useSelector(state => state.session.user);

    return (
        <div className='navigation-container'>
            <div className='navigation-logo'>

            </div>
            <div className='navigation-top'>
                <ul className='navigation-top-right'>
                    {isLoaded && (
                        <li>
                            <ProfileButton user={sessionUser} />
                        </li>
                    )}
                </ul>

            </div>

        </div>
    );
}

export default Navigation;
