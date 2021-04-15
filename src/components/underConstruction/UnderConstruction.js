import React from 'react';
import { NavLink } from 'react-router-dom';

const UnderConstruction = () => {
    return (
        <div>
            <h3 id="message">
                <i className="fas fa-hammer" /> Cette page est en travaux
            </h3>
            <NavLink exact to="/">
                <i className="fas fa-home"></i>
                <span> Accueil </span>
            </NavLink>
        </div>
    );
};

export default UnderConstruction;