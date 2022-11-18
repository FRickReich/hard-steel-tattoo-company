import React, { useState, useEffect, createContext } from 'react';
import { useNavigate } from 'react-router-dom';

import { isAuthenticated } from '../services/authService';

const UserContext = createContext();

export const UserContextProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(undefined);

    const nav = useNavigate();

    useEffect(() => {
        const checkLoggedIn = async () => {
            let cuser = isAuthenticated();
            if (cuser === null) {
                localStorage.setItem('user', '');
                cuser = '';
            }

            setCurrentUser(cuser);
        };

        checkLoggedIn();
    }, []);

    return (
        <UserContext.Provider value={[currentUser, setCurrentUser]}>
            {currentUser?.token ? children : nav('/login')}
        </UserContext.Provider>
    );
};

export default UserContext;

// React.createContext({
//     isLoggedIn: false,
//     user: null,
//     token: null,
//     loading: true,
//     login: () => {},
//     logout: () => {},
// });

// import React, { useState } from 'react';
// import axios from 'axios';

// const AuthContext = React.createContext();

// const url = 'http://localhost:3000/api/auth/sign_in';

// const AuthProvider = (props) => {
//     const [user, setUser] = useState();

//     const login = async (e, email, password) => {
//         e.preventDefault();

//         try {
//             const res = await axios({
//                 method: 'post',
//                 url: url,
//                 data: JSON.stringify({ email, password }),
//                 headers: { 'Content-Type': 'application/json' },
//             });
//             localStorage.setItem('token', res.headers['access-token']);
//             localStorage.setItem('client', res.headers['client']);
//             localStorage.setItem('uid', res.headers['uid']);
//             setUser(res.headers['access-token']);
//             console.log('Logged in');
//         } catch (err) {
//             console.log(err);
//         }
//     };

//     return (
//         <AuthContext.Provider
//             value={{
//                 user,
//                 login,
//                 // logout,
//                 // register
//             }}
//             {...props}
//         />
//     );
// };

// const useAuth = () => React.useContext(AuthContext);

// export { AuthProvider, useAuth };
