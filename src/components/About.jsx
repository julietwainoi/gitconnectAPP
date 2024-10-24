//import React from 'react';
import React, { useContext } from 'react';
import { UserContext } from '../UserContext';

function About({ name }) {
    const { user } = useContext(UserContext);

    return (
        <div>
            <h1>About Page</h1>
            <p>This is about {name}, but you're logged in as {user.name} ({user.role}).</p>
        </div>
    );
}
export default About;
