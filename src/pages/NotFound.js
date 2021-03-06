import React from 'react';
import { NavLink } from 'react-router-dom';

const NotFound = () => {
    return (
        <div className="notFound">
            <div className="notFoundContent">
                <h3 id="message">
                    <i className="fas fa-search" id="iconSearch"></i><br/>
                    Cette page n'existe pas
                    <br/><br/>
                </h3>
                <NavLink exact to="/">
                    <i className="fas fa-home"></i>
                    <span> Accueil </span>
                </NavLink>
            </div>
            
        </div>
    );
};

export default NotFound;