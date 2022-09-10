import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Navigetion() {
    return (
        <header>
            <NavLink to="/form">New contact</NavLink>
            <NavLink to="/list">Contacts</NavLink>
            <NavLink to="/editList">Edit contacts</NavLink>
        </header>
    );
}
