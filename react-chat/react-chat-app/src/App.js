import React, { useState, useEffect } from 'react';
import Login from './components/Login';
import Chat from './components/Chat';
import client from './components/feathersClient';

const App = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        const checkAuth = async () => {
            try {
                await client.reAuthenticate();
                setIsLoggedIn(true);
            } catch {
                setIsLoggedIn(false);
            }
        };

        checkAuth();
    }, []);

    const handleLogin = () => setIsLoggedIn(true);
    const handleLogout = () => {
        client.logout();
        setIsLoggedIn(false);
    };

    return (
        <div className="App">
            {isLoggedIn ? <Chat onLogout={handleLogout} /> : <Login onLogin={handleLogin} />}
        </div>
    );
};

export default App;
