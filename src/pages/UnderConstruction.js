import React from 'react';
import { NavLink } from 'react-router-dom';

const UnderConstruction = () => {
    return (
        <div className="underConstruction">
            <div className="underConstructionContent">
                <h3 id="message">
                    <i className="fas fa-cogs" id="iconCogs"></i><br/>
                    Cette page est en travaux
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

export default UnderConstruction;