import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { UserContextProvider } from './context/userContext';

import { NotFound, Homepage, Dashboard, Login, Imprint, Tos } from './views';

import './App.scss';

export default () => {
    return (
        <div className="App">
            <BrowserRouter basename="/">
                <Routes>
                    <Route path="/login" element={<Login />} />
                    <Route
                        path="/dashboard"
                        element={
                            <UserContextProvider>
                                <Dashboard />
                            </UserContextProvider>
                        }
                    />
                    <Route path="/" element={<Homepage />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
};
