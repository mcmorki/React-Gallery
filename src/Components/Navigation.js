import React from 'react';
import {NavLink} from 'react-router-dom';

const Navigation = () => <nav className="main-nav">
    <ul>
        <li>
            <NavLink exact to='/presets/hawaii'>Hawaii</NavLink>
        </li>
        <li>
            <NavLink exact to='/presets/virgin islands'> Virgin Islands </NavLink>
        </li>
        <li>
            <NavLink exact to='/presets/St.croix'>St.Croix</NavLink>
        </li>
        <li>
            <NavLink exact to='/search/'>Search</NavLink>
        </li>
    </ul>
</nav>

export default Navigation;
