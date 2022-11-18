import { useEffect, useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import userContext from '../context/userContext';

export default () => {
    const [currentUser, setCurrentUser] = useContext(userContext);

    const navigate = useNavigate();

    console.log('header', currentUser);

    const handleLogOut = () => {
        localStorage.removeItem('user');
        setCurrentUser({});

        navigate('/');
    };

    useEffect(() => {
        document.title = 'Dashboard';
    }, []);

    return (
        <div>
            <h1>Dashboard yo!</h1>

            <button type="button" onClick={handleLogOut}>
                Log out
            </button>
        </div>
    );
};
