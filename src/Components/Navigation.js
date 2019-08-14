import React from 'react';
import {NavLink} from 'react-router-dom';

const Navigation = () => <nav className="main-nav">
    <ul>
        <li>
            <NavLink exact to='/presets/"famous" "architecture"'>Designed</NavLink>
        </li>
        <li>
            <NavLink exact to='/presets/landscaping'>Landscape</NavLink>
        </li>
        <li>
            <NavLink exact to='/presets/architect'>Architecture</NavLink>
        </li>
        <li>
            <NavLink exact to='/presets/"skyscraper"'>Skyscraper</NavLink>
        </li>
        <li>
            <NavLink exact to='/search/'>Search</NavLink>
        </li>
    </ul>
</nav>

export default Navigation;
