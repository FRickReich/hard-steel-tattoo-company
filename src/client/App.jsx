import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { NotFound, Homepage } from './views';

import './App.scss';

export default () => {
    return (
        <div className="App">
            <BrowserRouter basename="/">
                <Routes>
                    {/* <Route path="/" element={<Auth />} /> */}
                    {/* <Route path="/dashboard" element={<Dashboard />} /> */}
                    {/* <Route path="/settings" element={<Settings />} /> */}
                    <Route path="/" element={<Homepage />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
};
