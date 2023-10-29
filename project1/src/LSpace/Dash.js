import React, { useState, useEffect } from 'react';
import axios from 'axios';
import StudentLogin from '../pages/login/StudentLogin';

export default function Dash(){
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        // Check if the user is already logged in (by checking for the token in local storage)
        const token = localStorage.getItem('token');
        if (token) {
            // Verify the token on the server to check its validity (this is a basic example, in a real app you would use a more secure method)
            axios.post('http://localhost:5000/verifyToken', { token })
                .then(() => {
                    setIsLoggedIn(true);
                })
                .catch((err) => {
                    console.error('Token verification failed:', err);
                });
        }
    }, []);

    const handleLogout = () => {
        // Clear the token from local storage
        localStorage.removeItem('token');
        setIsLoggedIn(false);
    };

    return (
        <div>
            {isLoggedIn ? (
                <div>
                    <h1>Welcome! You're logged in.</h1>
                    <button onClick={handleLogout}>Logout</button>
                </div>
            ) : (
                <StudentLogin setIsLoggedIn={setIsLoggedIn} />
            )}
        </div>
    );
};


